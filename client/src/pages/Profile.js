import React from "react";
// import { Redirect, useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import AllPosts from "./components/AllPosts/AllPosts";
// // import Post from "./components/Post/Post";

// import { QUERY_USER, QUERY_ME } from "../utils/queries";

// import Auth from "../utils/auth";

// const Profile = () => {
//   const { username: userParam } = useParams();

//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Redirect to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }
// const Profile = () => {
//   return (
//     <div>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography sx={{ width: "33%", flexShrink: 0 }}>
//             General settings
//           </Typography>
//           <Typography sx={{ color: "text.secondary" }}>
//             I am an accordion
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
//             Aliquam eget maximus est, id dignissim quam.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
//           <Typography sx={{ color: "text.secondary" }}>
//             You are currently not an owner
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Donec placerat, lectus sed mattis semper, neque lectus feugiat
//             lectus, varius pulvinar diam eros in elit. Pellentesque convallis
//             laoreet laoreet.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3bh-content"
//           id="panel3bh-header"
//         >
//           <Typography sx={{ width: "33%", flexShrink: 0 }}>
//             Advanced settings
//           </Typography>
//           <Typography sx={{ color: "text.secondary" }}>
//             Filtering has been entirely disabled for whole web server
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//             sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel4"}
//         onChange={handleChange("panel4")}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4bh-content"
//           id="panel4bh-header"
//         >
//           <Typography sx={{ width: "33%", flexShrink: 0 }}>
//             Personal data
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
//             sit amet egestas eros, vitae egestas augue. Duis vel est augue.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// };
// export default Profile;
