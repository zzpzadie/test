import React, {useEffect, useRef, useState} from 'react';
import {SearchOutlined} from '@ant-design/icons';
import {Button, Form, Input, InputNumber, message, Modal, Space, Table} from 'antd';
import Highlighter from 'react-highlight-words';
import {getAddList, getDeleteList, getEditList, getUserList} from "@/request/api.js";
import "./UserManage.less";

import {useSubmit} from "react-router-dom";

const View = (props) => {
    const [data, setData] = useState([])
    const [editTitle, setEditTitle] = useState('')
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '10%',
            ...getColumnSearchProps('id'),
        }, {
            title: '账号',
            dataIndex: 'no',
            width: '10%',
            ...getColumnSearchProps('no'),
            // render: (text, record, index) => text? <span onClick={() => {
            //             handleEdit(record)
            //         }}>{text}</span>:<span>{""}</span>,
        }, {
            title: '名称',
            dataIndex: 'name',
            width: '10%',
            ...getColumnSearchProps('name'),
        },
        {
            title: '密码',
            dataIndex: 'password',
            width: '15%',
            ...getColumnSearchProps('password'),
        },
        {
            title: '年龄',
            dataIndex: 'age',
            width: '5%',
            ...getColumnSearchProps('age'),
        },
        {
            title: '性别',
            dataIndex: 'sex',
            width: '5%',
            ...getColumnSearchProps('sex'),
            render: (text, record, index) => text === 0 ? <span style={{color: 'red'}}>{"女"}</span> :
                <span>{"男"}</span>,
        }, {
            title: '电话',
            dataIndex: 'phone',
            width: '10%',
            ...getColumnSearchProps('phone'),
        },
        {
            title: '角色',
            dataIndex: 'roleId',
            width: '5%',
            ...getColumnSearchProps('roleId'),
            render: (text, record, index) => text === 0 ? <span style={{color: 'red'}}>{"超级管理员"}</span> :
                text === 1 ? <span style={{color: 'orange'}}>{"管理员"}</span> :
                    <span style={{color: 'black'}}>{"普通账号"}</span>,
        }, {
            title: '是否有效',
            dataIndex: 'isValid',
            width: '8%',
            ...getColumnSearchProps('isValid'),
            render: (text, record, index) => text === "Y" ? <span>{"有效"}</span> :
                <span style={{color: 'red'}}>{"无效"}</span>,
        },
        {
            title: '操作',
            key: 'action',
            width: '5%',
            render: (_, record) => (
                <Space size="middle">
                    <Button ghost={true} type="primary" onClick={() => {
                        handleDelete(record)
                    }}>删除</Button> <Button ghost={true} type="primary" onClick={() => {
                        handleEdit(record)
                    }}>编辑</Button>
                </Space>
            ),
        },
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        roleId: undefined
    });
    const formRef = React.createRef();
    const [form] = Form.useForm();
    useEffect(() => {
        // 这里放置你想要执行的方法,组件挂载后（及每次依赖项更新后）立即执行
        getList();
    }, []);
    const getList = () => {
        // 方法内容
        let params = {
            "name": ""
        }
        getUserList(params).then(res => {
            console.log(res)
            setData(res)
            // if (res.code===200){
            //     console.log(res.data)
            //     // this.data=res
            // }else {
            //     message.error("查询失败！！！")
            // }
        })
    };
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        console.log('selectedKeys[0]', selectedKeys)
        console.log('confirm', confirm)
        console.log('dataIndex', dataIndex)
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
        // handleSearch([], confirm, 'id');
    };
    const resetForm = () => {
        console.log('resetForm')
        setFormData([])
    };
    const handleEdit = (record) => {
        console.log('name', record);
        setIsModalOpen(true);
        if (record.id) {
            setEditTitle('编辑用户信息');
            setFormData(record);
            console.log('p', formData)
            // let params = {
            //     ...record
            // }
            // console.log('p',params)
            // getUserList(params).then(res => {
            //     setFormData(res[0])
            //     console.log('p',res[0])
            //     console.log('p',formData)
            //     // if (res.code===200){
            //     //     console.log(res.data)
            //     //     // this.data=res
            //     // }else {
            //     //     message.error("查询失败！！！")
            //     // }
            // })
        } else {
            setEditTitle("新增用户")
            resetForm();
        }
    };

    async function handleOk() {
        try {
            const values = await form.validateFields();
            console.log('Promise已成功解析1：', values);
            console.log('Promise已成功解析2：', formData);
            //判断
            if (editTitle === '编辑用户信息') {
                getEditList(formData).then(res => {
                    console.log(res)
                    if (res) {
                        message.success("修改成功！！！")
                        setIsModalOpen(false);
                        getList();
                    } else {
                        message.error("此用户不存在！！！")
                    }
                })
            } else {
                getAddList(formData).then(res => {
                    console.log(res)
                    if (res) {
                        message.success("新增成功！！！")
                        setIsModalOpen(false);
                        getList();
                    } else {
                        message.error("！！！")
                    }
                })
            }
        } catch (error) {
            console.log('Promise已拒绝：', error);
        }
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log('event', event)
        // console.log('name', name)
        // console.log('value', value)
        // console.log('formData', formData)
        setFormData({...formData, [name]: value});
        // console.log('formData2',formData)
    };
    const handleDelete = (e) => {
        console.log('e', e)
        getDeleteList(e.id).then(res => {
            if (res) {
                message.success("删除成功！！！")
                getList();
            } else {
                message.error("删除失败！！！")
            }
        })
    }
    return (
        <div className="UserManege">
            <Button ghost={true} type="primary" onClick={handleEdit}>新增</Button>
            <Table columns={columns} dataSource={data} rowKey={'id'}
                   // onRow={(record) => ({
                   //     onClick: () => {
                   //         console.log('record', record)
                   //         handleEdit(record)
                   //     },
                   // })}
                   className={"tableUser"}
            />
            <Modal title={editTitle} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="确认"
                   cancelText="取消" className={"handleEditModal"}>
                <Form form={form}
                      ref={formRef}
                      name="user"
                      labelCol={{span: 8,}}
                      wrapperCol={{span: 16,}}
                      style={{maxWidth: 600,}}
                      initialValues={{remember: true,}} autoComplete="off">

                    <Form.Item
                        label="账号"
                    >
                        <Input name="no" value={formData.no || ''} onChange={handleChange}/>
                    </Form.Item>

                    <Form.Item
                        label="名称"
                        rules={[
                            {
                                required: true,
                                message: '请输入名称!',
                            },
                        ]}
                    >
                        <Input name="name" value={formData.name || ''} onChange={handleChange}/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input name="password" value={formData.password || ''} onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item
                        label="年龄"
                        rules={[
                            {
                                required: true,
                                message: '请输入年龄!',
                            },
                        ]}
                    >
                        <InputNumber name="age" value={formData.age || ''} onBlur={handleChange}/>
                    </Form.Item>
                    <Form.Item
                        label="性别"
                        rules={[
                            {
                                required: true,
                                message: '请输入性别!',
                            },
                        ]}
                    >
                        <InputNumber name="sex" value={formData.sex || ''} onBlur={handleChange}/>
                    </Form.Item>
                    <Form.Item
                        label="电话"
                        rules={[
                            {
                                required: true,
                                message: '请输入电话!',
                            },
                        ]}
                    >
                        <Input name="phone" value={formData.phone || ''} onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item
                        label="角色"
                        rules={[
                            {
                                required: true,
                                message: '请输入角色!',
                            },
                        ]}
                    >
                        <InputNumber name="roleId" value={formData.roleId || ''} onBlur={handleChange}/>
                    </Form.Item>
                    <Form.Item
                        label="是否有效"
                        rules={[
                            {
                                required: true,
                                message: '请输入是否有效!',
                            },
                        ]}
                    >
                        <Input name={"isValid"} value={formData.isValid || ''} onChange={handleChange}/>
                    </Form.Item>

                    {/*<Form.Item*/}
                    {/*    wrapperCol={{*/}
                    {/*        offset: 8,*/}
                    {/*        span: 16,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Button type="primary" htmlType="submit">*/}
                    {/*        Submit*/}
                    {/*    </Button>*/}
                    {/*</Form.Item>*/}
                </Form>
            </Modal>
        </div>
    )
}
export default View
