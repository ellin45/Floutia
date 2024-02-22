"use client";

import React, {useState, useEffect} from "react";
import {useSetRecoilState, useRecoilState} from "recoil";
import styles from "../../../styles/page.module.css";
import {searchQueryState, searchValueState} from "recoil/atoms";
import useDebounce from "hooks/useDebounce";
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
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // 엔터 키가 눌렸을 때 onSearch 함수 호출
      onSearch(value);
    }
  };
  const handleSearch = (searchValue) => {
    console.log("검색어:", searchValue);
    // 여기에 검색을 수행하는 코드를 추가할 수 있습니다.
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.search_container}>
          <div className={styles.search_search}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러 추가
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
                onClick={()=>{handleSearch}} // 검색 버튼 클릭 시 검색 실행
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
