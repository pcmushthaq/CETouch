// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import Explore from "@material-ui/icons/Explore";
// import PersonOutline from "@material-ui/icons/PersonOutline";
// import Subscriptions from "@material-ui/icons/Subscriptions";
// import React from "react";

// export default function BNBar() {
//   const [value, setValue] = React.useState(0);

//   return (
//     <div>
//       <TabPanel value={value} index={0}>
//         <Profile />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Page Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Page Three
//       </TabPanel>
//       <BottomNavigation
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         showLabels
//       >
//         <BottomNavigationAction label="Feed" icon={<Subscriptions />} />
//         <BottomNavigationAction label="Explore" icon={<Explore />} />
//         <BottomNavigationAction label="Profile" icon={<PersonOutline />} />
//       </BottomNavigation>
//     </div>
//   );
// }
