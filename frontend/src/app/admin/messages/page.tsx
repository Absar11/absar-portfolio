'use client';

import React, { useEffect, useState } from 'react';
import { Table, Button, message, Space, Card, Tag } from 'antd';
import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      message.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/messages/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        message.success('Message deleted');
        setMessages(messages.filter((msg) => msg.id !== id));
      } else {
        message.error('Delete failed');
      }
    } catch (error) {
      console.error('Delete error:', error);
      message.error('An error occurred');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text: string) => new Date(text).toLocaleString(),
      sorter: (a: Message, b: Message) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      className: 'font-bold',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email: string) => <a href={`mailto:${email}`}>{email}</a>,
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
      render: (text: string) => <div className="max-w-md whitespace-pre-wrap">{text}</div>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Message) => (
        <Space size="middle">
          <Button
            danger
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => deleteMessage(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500">Manage contact form submissions</p>
          </div>
          <Button
            icon={<ReloadOutlined />}
            onClick={fetchMessages}
            loading={loading}
          >
            Refresh
          </Button>
        </div>

        <Card className="shadow-lg rounded-2xl border-0">
          <Table
            columns={columns}
            dataSource={messages}
            rowKey="id"
            loading={loading}
            pagination={{ pageSize: 10 }}
          />
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminMessagesPage;
