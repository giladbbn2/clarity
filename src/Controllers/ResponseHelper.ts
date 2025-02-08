export const createGeneralSuccessResponse = (result: any) => {
    if (typeof result === "undefined") {
        return {
            Result: null,
        };
    }

    return {
        Result: result,
    };
};

export const createGeneralSuccessPagedReponse = (
    skip: number,
    take: number,
    results: any[] | null,
    totalCount: number | null = null,
) => {
    return {
        Skip: skip,
        Take: take,
        Results: results,
        TotalCount: totalCount,
    }
}

export const createGeneralFailureResponse = (errorMessage: string | null) => {
    return {
        ErrorMessage: errorMessage,
    }
};