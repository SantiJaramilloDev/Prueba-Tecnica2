import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import AddBoxIcon from '@mui/icons-material/AddBox'
import CommentIcon from '@mui/icons-material/Comment'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const actions = [
  { icon: <AddBoxIcon />, name: 'Add Item' },
  { icon: <CommentIcon />, name: 'Comment' },
  { icon: <AddShoppingCartIcon />, name: 'Add Product' },
  { icon: <AccountBoxIcon />, name: 'Account' },
];

export default function FloatingButton() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}