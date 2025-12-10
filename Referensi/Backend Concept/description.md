Dokumentasi Detail Tabel (Data Dictionary)

#### A. Modul User & Identitas

**1. Tabel `user`**
Induk dari semua data.
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key unik. |
| `email` | VARCHAR | Email login (Unique). |
| `password` | VARCHAR | Hasil hashing (Bcrypt). |
| `isVerified` | BOOLEAN | `true` jika KYC Approved. |
| `createdAt` | TIMESTAMP | Waktu daftar. |
| `updatedAt` | TIMESTAMP | Waktu update profile. |
| `deletedAt` | TIMESTAMP | Untuk soft-delete (akun dihapus tapi data sisa di DB). |

**2. Tabel `kyc`**
Data verifikasi identitas (One-to-One dengan User).
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **userId** (FK) | UUID | Relasi ke tabel User. |
| `noKTP` | VARCHAR | Nomor Induk Kependudukan (Unique). |
| `imgKTP` | VARCHAR | URL gambar KTP (disimpan di Cloudinary/S3). |
| `domicile` | VARCHAR | Alamat lengkap user. |
| `status` | ENUM | `PENDING`, `APPROVED`, `REJECTED`. |
| `adminNote` | TEXT | Catatan admin jika reject. |
| `createdAt` | TIMESTAMP | Waktu pengajuan. |

**3. Tabel `notification`**
Pusat notifikasi in-app.
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **userId** (FK) | UUID | Notifikasi untuk siapa. |
| `title` | VARCHAR | Judul pesan. |
| `message` | TEXT | Isi pesan lengkap. |
| `isRead` | BOOLEAN | Default `false`. Jadi `true` saat diklik user. |
| `type` | ENUM | `INFO`, `SUCCESS`, `WARNING`, `ERROR`. |
| `createdAt` | TIMESTAMP | Waktu notifikasi masuk. |

---

#### B. Modul Finance & Banking

**4. Tabel `tradingAccount`**
Dompet user (bisa punya akun Demo & Real).
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **userId** (FK) | UUID | Pemilik akun. |
| `nameAccount` | VARCHAR | Label akun (opsional), misal "Tabungan Utama". |
| `pin` | VARCHAR | 6 digit PIN untuk keamanan Withdraw. |
| `type` | ENUM | `DEMO` (Uang mainan), `REAL` (Uang asli). |
| `balance` | DECIMAL(18, 2) | Saldo tertutup. **Penting: Pakai Decimal**. |
| `leverage` | INTEGER | Nilai leverage, misal `100` atau `500`. |
| `currency` | VARCHAR | Default "USD". |
| `createdAt` | TIMESTAMP | |

**5. Tabel `userBankAccount`**
Daftar rekening bank milik user untuk tujuan withdraw.
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **userId** (FK) | UUID | Pemilik rekening. |
| `bankName` | VARCHAR | Nama Bank (BCA, BNI, MANDIRI). |
| `accountNumber`| VARCHAR | Nomor Rekening. |
| `accountHolder`| VARCHAR | Nama pemilik di buku tabungan. |
| `isPrimary` | BOOLEAN | Jika true, jadi pilihan default saat withdraw. |
| `createdAt` | TIMESTAMP | |

**6. Tabel `transaction`**
History keluar masuk uang (Deposit/Withdraw).
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **accountId** (FK) | UUID | Dari `tradingAccount` mana uang diambil/ditambah? |
| **bankAccountId** (FK)| UUID | (Nullable) Ke rekening mana uang dikirim? (Khusus Withdraw). |
| `amount` | DECIMAL(18, 2) | Jumlah uang. |
| `type` | ENUM | `DEPOSIT`, `WITHDRAWAL`, `PROFIT`, `LOSS`. |
| `referenceId` | VARCHAR | ID Payment Gateway atau ID Order (jika dari profit). |
| `status` | ENUM | `PENDING`, `COMPLETED`, `FAILED`. |
| `proofImage` | VARCHAR | URL Bukti transfer (diupload Admin). |
| `createdAt` | TIMESTAMP | |

---

#### C. Modul Trading Core

**7. Tabel `symbol`**
Master data pasangan mata uang (Pair).
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **code** (PK) | VARCHAR | Kode Pair (Unique), misal `EURUSD`. |
| `baseCurrency` | VARCHAR | `EUR`. |
| `quoteCurrency` | VARCHAR | `USD`. |
| `digits` | INTEGER | Jumlah desimal harga (Forex=5, Crypto=2). |
| `contractSize` | INTEGER | Satuan standar lot (Forex=100000). |
| `spread` | INTEGER | Selisih harga jual/beli (dalam poin). |
| `isActive` | BOOLEAN | Apakah bisa ditradingkan? |
| `image` | VARCHAR | URL Icon bendera/koin. |
| `category` | VARCHAR | `FOREX`, `CRYPTO`, `METAL`. |

**8. Tabel `order`**
Jantung aplikasi: Mencatat posisi trading.
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **accountId** (FK) | UUID | Akun yang melakukan trade. |
| **symbolId** (FK) | VARCHAR | Pair apa yang ditrade (Relasi ke `symbol.code`). |
| `type` | ENUM | `BUY`, `SELL`. |
| `volume` | DECIMAL(10, 2) | Jumlah Lot (0.01 - 100.00). |
| `openPrice` | DECIMAL(18, 5) | Harga buka (**Penting: 5 desimal**). |
| `closePrice` | DECIMAL(18, 5) | Harga tutup (Null jika masih jalan). |
| `stopLoss` | DECIMAL(18, 5) | Batas rugi otomatis (Nullable). |
| `takeProfit` | DECIMAL(18, 5) | Batas untung otomatis (Nullable). |
| `profit` | DECIMAL(18, 2) | Hasil untung/rugi dalam USD (Null jika open). |
| `status` | ENUM | `OPEN`, `CLOSED`, `PENDING`, `CANCELLED`. |
| `commission` | DECIMAL(10, 2) | Biaya broker. |
| `swap` | DECIMAL(10, 2) | Biaya inap. |
| `closeReason` | ENUM | `USER`, `TP`, `SL`, `SO` (Stop Out). |
| `createdAt` | TIMESTAMP | Waktu Open Position. |
| `closedAt` | TIMESTAMP | Waktu Close Position. |

---

#### D. Modul Interaktif

**9. Tabel `watchlist`**
Daftar pair favorit user.
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **userId** (FK) | UUID | User pelapor. |
| **symbolCode** (FK)| VARCHAR | Pair yang difavoritkan. |
| `createdAt` | TIMESTAMP | |

**10. Tabel `priceAlert`**
Notifikasi jika harga menyentuh target.
| Kolom | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| **id** (PK) | UUID | Primary Key. |
| **userId** (FK) | UUID | User pelapor. |
| **symbolCode** (FK)| VARCHAR | Pair target. |
| `targetPrice` | DECIMAL(18, 5)| Harga yang ditunggu. |
| `condition` | ENUM | `ABOVE` (saat harga naik lewat target), `BELOW`. |
| `status` | ENUM | `ACTIVE`, `TRIGGERED`, `OFF`. |
| `createdAt` | TIMESTAMP | |
