import React from 'react';
import {notifications} from "@mantine/notifications";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postPlaybackQueue} from "api/me";

export const usePostPlaybackQueue = () => {
  const queryClient = useQueryClient();
  const {mutate} = useMutation(postPlaybackQueue, {
    onSuccess: () => {
      queryClient.invalidateQueries(["queue"]);
      notifications.show({
        message: "재생목록에 추가되었습니다.",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {mutate};
};

//모든 타입은 직접 경로를 타고 들어가 에러코드를 보고 해결하기 export가 안되있는 경우가 있으니
//interface는 export interface로 변경해 주고 {}로 닫기
//type은 export declare type으로 선언하기