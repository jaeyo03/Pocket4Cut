import { useMemo } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { pagingReviews } from "../api/review";

type UseReviewQueryProps = {
  boothId: string;
  initialPage?: number;
  rowsPerPage: number;
};

export const useReviewsInfiniteQuery = (boothId: string, accessToken: string) => {
  return useInfiniteQuery({
    queryKey: ["pagingReviews"],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await pagingReviews(boothId, pageParam, accessToken);
      return {
        data: res?.reviews,
        reviewCount: res?.reviewCount,
        nextPage: res && res.reviews.length > 0 ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
