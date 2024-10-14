const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    development: {
        baseApi: "/api",
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
    },
    test: {
        baseApi: "//test.future.com/api",
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
    },
    prod: {
        baseApi: "//future.com/api",
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
    }
}

export default {
    env,
    ...EnvConfig[env],
    //mock
    mock: false,  // 远程的关了，可以在本地mock.js的方式使用本地的
}