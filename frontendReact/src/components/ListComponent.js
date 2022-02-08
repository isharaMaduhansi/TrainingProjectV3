import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { StarOutlined } from '@ant-design/icons';
import Divider from '@mui/material/Divider';

const ListComponent = ({ primary, secondary }) => {
    return (
        <div>
            {primary.map((text1, index) => {
                return (
                    <div>
                        <List
                            sx={{
                                width: '90%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <StarOutlined />
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary={text1} secondary={secondary[index]} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>

                    </div>
                );
            })}
        </div>
    )
}

export default ListComponent