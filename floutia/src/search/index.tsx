"use client";
import variables from "../../styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import axios from "axios";
import React, {useState, useEffect} from "react";
import qs from "qs";
import YouTube from "react-youtube";

// export default function Search() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [data, setData] = useState([]);
//   const [playlist, setPlaylist] = useState([]);
//   const apiUrl = process.env.NEXT_PUBLIC_YOUR_API_KEY;

//   useEffect(() => {
//     const fetchData = async (searchQuery) => {
//       try {
//         const params = {
//           q: searchQuery,
//           part: "snippet",
//           maxResults: 2,
//           type: "video",
//           regionCode: "KR",
//           key: apiUrl,
//         };

//         const queryString = qs.stringify(params);

//         const response = await axios.get(
//           `https://www.googleapis.com/youtube/v3/search?${queryString}`,
//           {
//             headers: {
//               accept: "application/json",
//             },
//           }
//         );

//         if (searchQuery) {
//           const videos = response.data.items.map((item) => ({
//             videoId: item.id.videoId,
//             channelId: item.snippet.channelId,
//           }));

//           setData(videos);
//           console.log("videoIds", videoIds);
//           console.log("channelIds", channelIds);
//         }
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData(searchQuery);
//   }, [searchQuery]);


//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       fetchData(event.target.value);
//     }
//   };

//   const handleClick = () => {
//     fetchData(searchQuery);
//   };

//   const handleChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className={styles.body}>
//       <div className={styles.search_container}>
//         <div className={styles.search_search}>
//           <input
//             type="text"
//             value={searchQuery}
//             onKeyPress={handleKeyPress}
//             onChange={handleChange}
//             placeholder="노래나 가수를 검색 해 보세요!"
//             className={styles.search_input}
//           />
//           <div className={styles.search_btn} onClick={handleClick}>
//             <Image
//               src="/search_search.png"
//               alt="search_btn"
//               width={30}
//               height={30}
//             />
//           </div>
//         </div>
//       </div>
//       <div className={variables.search_youtubeContainer}>
//         {data.map((video) => (
//           <div className={variables.search_youtubeBox} key={video.videoId}>
//             <YouTube
//               videoId={video.videoId}
//               id={video.channelId}
//               className={variables.search_youtubeVideo}
//               iframeClassName=""
//               style={{}}
//               title="K-POP"
//               loading="undefined"
//             />
//           </div>
//         ))}
//       </div>

//       <div className={variables.search_youtubeContainer}>
//         {playlist.map((list) => (
//           <div className={variables.search_youtubeBox} key={list.channelId}>
//             <YouTube
//               channelId={list.channelId}
//               id={list.id}
//               className={variables.search_youtubeVideo}
//               iframeClassName=""
//               style={{}}
//               title="K-POP"
//               loading="undefined"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
