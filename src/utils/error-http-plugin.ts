export const setHttpPlugin = {
    async requestDidStart() {
        return {
            async willSendResponse({ response }: any) {
                if (response?.errors?.[0]?.message) {
                    response.http.status = 404;
                }
            }
        };
    }
};
