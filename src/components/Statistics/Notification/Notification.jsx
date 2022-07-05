import { NotificationMessage, NotificationText } from './Notification.styled';


export const Notification = ({ message }) => {
    return <NotificationMessage>
                <NotificationText>
                    {message}
                </NotificationText>
            </NotificationMessage>
}