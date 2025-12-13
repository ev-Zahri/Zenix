
interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    isRead: boolean;
    type: "INFO" | "WARNING" | "ERROR" | "SUCCESS";
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export default Notification;
