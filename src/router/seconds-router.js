export default [
    // {
    //     "ID": 22,
    //     "CreatedAt": "2020-12-19T16:00:24+08:00",
    //     "UpdatedAt": "2020-12-19T16:00:24+08:00",
    //     "parentId": "0",
    //     "path": "https://www.gin-vue-admin.com",
    //     "name": "https://www.gin-vue-admin.com",
    //     "hidden": false,
    //     "component": '/',
    //     "sort": 0,
    //     "meta": {
    //         "keepAlive": false,
    //         "defaultMenu": false,
    //         "title": "官方网站",
    //         "icon": "s-home"
    //     },
    //     "authoritys": null,
    //     "menuId": "22",
    //     "children": null,
    //     "parameters": [

    //     ]
    // },
    // {
    //     "ID": 1,
    //     "CreatedAt": "2020-12-19T16:00:24+08:00",
    //     "UpdatedAt": "2020-12-19T16:00:24+08:00",
    //     "parentId": "0",
    //     "path": "dashboard",
    //     "name": "dashboard",
    //     "hidden": false,
    //     "component": () => import("@/views/view/dashboard/index.vue"),
    //     "sort": 1,
    //     "meta": {
    //         "keepAlive": false,
    //         "defaultMenu": false,
    //         "title": "仪表盘",
    //         "icon": "setting"
    //     },
    //     "authoritys": null,
    //     "menuId": "1",
    //     "children": null,
    //     "parameters": [

    //     ]
    // },
    {
        "ID": 3,
        "CreatedAt": "2020-12-19T16:00:24+08:00",
        "UpdatedAt": "2020-12-19T16:00:24+08:00",
        "parentId": "0",
        "path": "/admin",
        "name": "superAdmin",
        "hidden": false,
        // "component": () => import("@/views/view/superAdmin/index.vue"),
        "component": () => import("@/views/layout/Layout.vue"),
        "sort": 3,
        "meta": {
            "keepAlive": false,
            "defaultMenu": false,
            "title": "超级管理员",
            "icon": "user-solid"
        },
        "authoritys": null,
        "menuId": "3",
        "children": [
            {
                "ID": 4,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "authority",
                "name": "authority",
                "hidden": false,
                "component": () => import("@/views/view/superAdmin/authority/authority.vue"),
                "sort": 1,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "角色管理",
                    "icon": "s-custom"
                },
                "authoritys": null,
                "menuId": "4",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 19,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "dictionaryDetail/:id",
                "name": "dictionaryDetail",
                "hidden": true,
                "component": () => import("@/views/view/superAdmin/dictionary/sysDictionaryDetail.vue"),
                "sort": 1,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "字典详情",
                    "icon": "s-order"
                },
                "authoritys": null,
                "menuId": "19",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 5,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "menu",
                "name": "menu",
                "hidden": false,
                "component": () => import("@/views/view/superAdmin/menu/menu.vue"),
                "sort": 2,
                "meta": {
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "菜单管理",
                    "icon": "s-order"
                },
                "authoritys": null,
                "menuId": "5",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 6,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "api",
                "name": "api",
                "hidden": false,
                "component": () => import("@/views/view/superAdmin/api/api.vue"),
                "sort": 3,
                "meta": {
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "api管理",
                    "icon": "s-platform"
                },
                "authoritys": null,
                "menuId": "6",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 7,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "user",
                "name": "user",
                "hidden": false,
                "component": () => import("@/views/view/superAdmin/user/user.vue"),
                "sort": 4,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "用户管理",
                    "icon": "coordinate"
                },
                "authoritys": null,
                "menuId": "7",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 18,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "dictionary",
                "name": "dictionary",
                "hidden": false,
                "component": () => import("@/views/view/superAdmin/dictionary/sysDictionary.vue"),
                "sort": 5,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "字典管理",
                    "icon": "notebook-2"
                },
                "authoritys": null,
                "menuId": "18",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 20,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "3",
                "path": "operation",
                "name": "operation",
                "hidden": false,
                "component": () => import("@/views/view/superAdmin/operation/sysOperationRecord.vue"),
                "sort": 6,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "操作历史",
                    "icon": "time"
                },
                "authoritys": null,
                "menuId": "20",
                "children": null,
                "parameters": [

                ]
            }
        ],
        "parameters": [

        ]
    },
    {
        "ID": 8,
        "CreatedAt": "2020-12-19T16:00:24+08:00",
        "UpdatedAt": "2020-12-19T16:00:24+08:00",
        "parentId": "0",
        "path": "person",
        "name": "person",
        "hidden": true,
        "component": () => import("@/views/view/person/person.vue"),
        "sort": 4,
        "meta": {
            "keepAlive": false,
            "defaultMenu": false,
            "title": "个人信息",
            "icon": "message-solid"
        },
        "authoritys": null,
        "menuId": "8",
        "children": null,
        "parameters": [

        ]
    },
    {
        "ID": 14,
        "CreatedAt": "2020-12-19T16:00:24+08:00",
        "UpdatedAt": "2020-12-19T16:00:24+08:00",
        "parentId": "0",
        // "path": "systemTools",
        "path": "/systemTools",
        "name": "systemTools",
        "hidden": false,
        // "component": () => import("@/views/view/systemTools/index.vue"),
        "component": () => import("@/views/layout/Layout.vue"),
        "sort": 5,
        "meta": {
            "keepAlive": false,
            "defaultMenu": false,
            "title": "系统工具",
            "icon": "s-cooperation"
        },
        "authoritys": null,
        "menuId": "14",
        "children": [
            {
                "ID": 15,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "14",
                "path": "autoCode",
                "name": "autoCode",
                "hidden": false,
                "component": () => import("@/views/view/systemTools/autoCode/index.vue"),
                "sort": 1,
                "meta": {
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "代码生成器",
                    "icon": "cpu"
                },
                "authoritys": null,
                "menuId": "15",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 16,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "14",
                "path": "formCreate",
                "name": "formCreate",
                "hidden": false,
                "component": () => import("@/views/view/systemTools/formCreate/index.vue"),
                "sort": 2,
                "meta": {
                    "keepAlive": true,
                    "defaultMenu": false,
                    "title": "表单生成器",
                    "icon": "magic-stick"
                },
                "authoritys": null,
                "menuId": "16",
                "children": null,
                "parameters": [

                ]
            }
        ],
        "parameters": [

        ]
    },
    {
        "ID": 24,
        "CreatedAt": "2020-12-19T16:00:24+08:00",
        "UpdatedAt": "2020-12-19T16:00:24+08:00",
        "parentId": "0",
        "path": "/workflow",
        "name": "workflow",
        "hidden": false,
        "component": () => import("@/views/layout/Layout.vue"),
        // "component": () => import("@/views/view/workflow/index.vue"),
        "sort": 5,
        "meta": {
            "keepAlive": false,
            "defaultMenu": false,
            "title": "工作流功能",
            "icon": "phone"
        },
        "authoritys": null,
        "menuId": "24",
        "children": [
            {
                "ID": 25,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "24",
                "path": "workflowCreate",
                "name": "workflowCreate",
                "hidden": false,
                "component": () => import("@/views/view/workflow/workflowCreate/workflowCreate.vue"),
                "sort": 0,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "工作流绘制",
                    "icon": "circle-plus"
                },
                "authoritys": null,
                "menuId": "25",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 26,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "24",
                "path": "workflowProcess",
                "name": "workflowProcess",
                "hidden": false,
                "component": () => import("@/views/view/workflow/workflowProcess/workflowProcess.vue"),
                "sort": 0,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "工作流列表",
                    "icon": "s-cooperation"
                },
                "authoritys": null,
                "menuId": "26",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 27,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "24",
                "path": "workflowUse",
                "name": "workflowUse",
                "hidden": true,
                "component": () => import("@/views/view/workflow/workflowUse/workflowUse.vue"),
                "sort": 0,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "使用工作流",
                    "icon": "video-play"
                },
                "authoritys": null,
                "menuId": "27",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 28,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "24",
                "path": "started",
                "name": "started",
                "hidden": false,
                "component": () => import("@/views/view/workflow/userList/started.vue"),
                "sort": 0,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "我发起的",
                    "icon": "s-order"
                },
                "authoritys": null,
                "menuId": "28",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 29,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "24",
                "path": "need",
                "name": "need",
                "hidden": false,
                "component": () => import("@/views/view/workflow/userList/need.vue"),
                "sort": 0,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "我的待办",
                    "icon": "s-platform"
                },
                "authoritys": null,
                "menuId": "29",
                "children": null,
                "parameters": [

                ]
            }
        ],
        "parameters": [

        ]
    },
    {
        "ID": 9,
        "CreatedAt": "2020-12-19T16:00:24+08:00",
        "UpdatedAt": "2020-12-19T16:00:24+08:00",
        "parentId": "0",
        "path": "/example",
        "name": "example",
        "hidden": false,
        // "component": () => import("@/views/view/example/index.vue"),
        "component": () => import("@/views/layout/Layout.vue"),
        "sort": 6,
        "meta": {
            "keepAlive": false,
            "defaultMenu": false,
            "title": "示例文件",
            "icon": "s-management"
        },
        "authoritys": null,
        "menuId": "9",
        "children": [
            {
                "ID": 10,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "9",
                "path": "excel",
                "name": "excel",
                "hidden": false,
                "component": () => import("@/views/view/example/excel/excel.vue"),
                "sort": 4,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "excel导入导出",
                    "icon": "s-marketing"
                },
                "authoritys": null,
                "menuId": "10",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 11,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "9",
                "path": "upload",
                "name": "upload",
                "hidden": false,
                "component": () => import("@/views/view/example/upload/upload.vue"),
                "sort": 5,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "上传下载",
                    "icon": "upload"
                },
                "authoritys": null,
                "menuId": "11",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 12,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "9",
                "path": "breakpoint",
                "name": "breakpoint",
                "hidden": false,
                "component": () => import("@/views/view/example/breakpoint/breakpoint.vue"),
                "sort": 6,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "断点续传",
                    "icon": "upload"
                },
                "authoritys": null,
                "menuId": "12",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 21,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "9",
                "path": "simpleUploader",
                "name": "simpleUploader",
                "hidden": false,
                "component": () => import("@/views/view/example/simpleUploader/simpleUploader"),
                "sort": 6,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "断点续传（插件版）",
                    "icon": "upload"
                },
                "authoritys": null,
                "menuId": "21",
                "children": null,
                "parameters": [

                ]
            },
            {
                "ID": 13,
                "CreatedAt": "2020-12-19T16:00:24+08:00",
                "UpdatedAt": "2020-12-19T16:00:24+08:00",
                "parentId": "9",
                "path": "customer",
                "name": "customer",
                "hidden": false,
                "component": () => import("@/views/view/example/customer/customer.vue"),
                "sort": 7,
                "meta": {
                    "keepAlive": false,
                    "defaultMenu": false,
                    "title": "客户列表（资源示例）",
                    "icon": "s-custom"
                },
                "authoritys": null,
                "menuId": "13",
                "children": null,
                "parameters": [

                ]
            }
        ],
        "parameters": [

        ]
    },
    {
        "ID": 23,
        "CreatedAt": "2020-12-19T16:00:24+08:00",
        "UpdatedAt": "2020-12-19T16:00:24+08:00",
        "parentId": "0",
        "path": "/state",
        "name": "state",
        "hidden": false,
        "component": () => import("@/views/view/system/state.vue"),
        "sort": 6,
        "meta": {
            "keepAlive": false,
            "defaultMenu": false,
            "title": "服务器状态",
            "icon": "cloudy"
        },
        "authoritys": null,
        "menuId": "23",
        "children": null,
        "parameters": [

        ]
    },
    // {
    //     "ID": 2,
    //     "CreatedAt": "2020-12-19T16:00:24+08:00",
    //     "UpdatedAt": "2020-12-19T16:00:24+08:00",
    //     "parentId": "0",
    //     "path": "/about",
    //     "name": "about",
    //     "hidden": false,
    //     "component": () => import("@/views/view/about/index.vue"),
    //     "sort": 7,
    //     "meta": {
    //         "keepAlive": false,
    //         "defaultMenu": false,
    //         "title": "关于我们",
    //         "icon": "info"
    //     },
    //     "authoritys": null,
    //     "menuId": "2",
    //     "children": null,
    //     "parameters": [

    //     ]
    // }
]