import styled from "styled-components";

const Drawer = styled.section`
   border-top: 1px solid rgb(210,219,210);
   padding-left: 40px;
   width: 250px;
`;

const DrawerItem = ({ label, icon }) => {
    return (
        <table>
            <tr>
                <td>
                    <img width="40px" height="35px" src={icon} alt="" />
                </td>
                <td style={{paddingLeft: 30}}>
                    <p style={{ fontSize: "20px", fontWeight: "450" }}>{label}</p>
                </td>
            </tr>
        </table>
    )
}

export default function SideBar() {

    return (
        <div style={{
            border: "1px solid rgb(219,219,219)",
            paddingTop: "60px",
            maxHeight: "350px",
            overflowY: "scroll"
        }}>
            <Drawer>
                <DrawerItem label="Inbox" icon="https://image.shutterstock.com/image-vector/message-icon-email-news-illustrations-260nw-1488499448.jpg" />
                <DrawerItem label="Starred" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
                <DrawerItem label="Send email" icon="https://image.shutterstock.com/image-vector/message-icon-email-news-illustrations-260nw-1488499448.jpg" />
                <DrawerItem label="Drafts" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeauJR7lywjkxls00Hh9YDByO348YZcbfHEw&usqp=CAU" />
            </Drawer>
            <Drawer>
                <DrawerItem label="All mail" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5niwz9UyKS7Ru4AEINV1YytvOWMtr1pBGQ&usqp=CAU" />
                <DrawerItem label="Trash" icon="https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_1280.png" />
                <DrawerItem label="Spam" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5niwz9UyKS7Ru4AEINV1YytvOWMtr1pBGQ&usqp=CAU" />
                <DrawerItem label="Outbox" icon="https://cdn.pixabay.com/photo/2019/10/19/17/24/gmail-4561841_1280.png" />
            </Drawer>
        </div>
    )
}