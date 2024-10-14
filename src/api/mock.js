import Mock from 'mockjs'
import homeApi from './mockData/home.js'
import userApi from './mockData/user.js'
import menuApi from './mockData/permission.js'

// 1.拦截的路径 2.方法 3 制造出的假数据
Mock.mock("/api/home/getTableData", "get", homeApi.getTableData)
Mock.mock("/api/home/getCountData", "get", homeApi.getCountData)
Mock.mock("/api/home/getChartData", "get", homeApi.getChartData)
// Mock.mock("/api/user/getUserData","get", userApi.getUserList)
Mock.mock(RegExp(`/api/user/getUserData` + ".*"),"get", userApi.getUserList)
Mock.mock(RegExp(`/api/user/deleteUser` + ".*"),"get", userApi.deleteUser)
Mock.mock(RegExp(`/api/user/addUser` + ".*"),"post", userApi.createUser)
Mock.mock(RegExp(`/api/user/editUser` + ".*"),"post", userApi.updateUser)
Mock.mock(RegExp(`/api/permission/getMenu` + ".*"),"post", menuApi.getMenu)