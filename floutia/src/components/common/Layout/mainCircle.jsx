"use client";

import React, {useState, useEffect} from "react";
import {useSetRecoilState, useRecoilState} from "recoil";
import styles from "../../../styles/page.module.css";
import {searchQueryState, searchValueState} from "recoil/atoms";
import Image from "next/image";

// import YouTube from "react-youtube";

// export default function MainCircle() {
//   const imageSize = 600;
//   const [isClick, setIsClick] = useState(true);
//   const [data, setData] = useState(null);

//   const opts = {
//     height: "390",
//     width: "640",
//     playerVars: {
//       autoplay: 1,
//     },
//   };
//   const handleReady = (event) => {
//     console.log("Player is ready");
//   };
//   return (
//     <>
//       <div className={variables.youtubeContainer}>
//         <div className={variables.youtubeBox}>
//           <YouTube
//             videoId="9JFi7MmjtGA" // defaults -> ''
//             id="BPM Entertainment" // defaults -> ''
//             className={variables.youtubeVideo} // defaults -> ''
//             iframeClassName="" // defaults -> ''
//             style={{}} // defaults -> {}
//             title="K-POP" // defaults -> ''
//             loading="undefined" // defaults -> undefined
//             opts={opts} // defaults -> {}
//             onReady={handleReady} // defaults -> noop
//           />
//         </div>
//         <div className={variables.youtubeBox}>
//           <YouTube
//             videoId="D8VEhcPeSlc" // defaults -> ''
//             id="SMTOWN" // defaults -> ''
//             className={variables.youtubeVideo} // defaults -> ''
//             iframeClassName="" // defaults -> ''
//             style={{}} // defaults -> {}
//             title="K-POP" // defaults -> ''
//             loading="undefined" // defaults -> undefined
//             opts={opts} // defaults -> {}
//             onReady={handleReady} // defaults -> noop
//           />
//         </div>
//         <div className={variables.youtubeBox}>
//           <YouTube
//             videoId="eQNHDV7lKgE" // defaults -> ''
//             id="BLACKPINK" // defaults -> ''
//             className={variables.youtubeVideo} // defaults -> ''
//             iframeClassName="" // defaults -> ''
//             style={{}} // defaults -> {}
//             title="K-POP" // defaults -> ''
//             loading="undefined" // defaults -> undefined
//             opts={opts} // defaults -> {}
//             onReady={handleReady} // defaults -> noop
//           />
//         </div>
//       </div>
//     </>
//   );
// }

const SearchInput = ({...props}) => {
  const [value, setValue] = useRecoilState(searchValueState);
  const setQuery = useSetRecoilState(searchQueryState);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    setSearchQuery(searchQuery);
    if (event.key === "Enter") {
      setValue(event.target.value);
    }
  };

  useEffect(() => {
    setQuery(value);
  }, [setQuery]);
  return (
    <>
      <div className={styles.body}>
        <div className={styles.search_container}>
          <div className={styles.search_search}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="노래나 가수를 검색 해 보세요!"
              className={styles.search_input}
              {...props}
            />
            <div className={styles.search}>
              <Image
                src="/search.png"
                alt="Floutia Logo"
                width={20}
                height={20}
                className={styles.search_btn}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
