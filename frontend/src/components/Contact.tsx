'use client';

import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config/api';

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success({ 
          content: 'Payload delivered [EXIT_CODE 0]', 
          className: 'font-mono' 
        });
        form.resetFields();
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      message.error({ 
        content: 'Delivery failed [EXIT_CODE 1]', 
        className: 'font-mono' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-editor-bg border-t border-primary/10">
      <div className="max-w-4xl mx-auto px-10">
        <header className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl font-bold font-mono text-white">./init_connection.sh</h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/20 bg-editor-bg/50 overflow-hidden shadow-2xl code-glow"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-sidebar-bg px-4 py-2 border-b border-primary/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            </div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">bash — contact@absar-ahmad</div>
            <div className="w-12"></div>
          </div>

          <div className="p-8 font-mono">
            <div className="flex items-center gap-2 mb-8 text-primary">
              <span className="text-sm">guest@portfolio:~$</span>
              <span className="text-slate-500 text-sm italic">./send_message.sh</span>
            </div>

            <Form form={form} layout="vertical" onFinish={onFinish} className="font-mono">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <Form.Item
                  name="name"
                  label={<span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">--return-path (Name)</span>}
                  rules={[{ required: true, message: 'Required' }]}
                >
                  <Input 
                    placeholder="Enter_Sender_Name" 
                    className="bg-transparent border-b border-primary/10 rounded-none focus:border-primary text-white placeholder:text-white/50 transition-colors h-10 outline-none hover:border-primary/30"
                    style={{ color: '#fff' }}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">--sender-addr (Email)</span>}
                  rules={[{ required: true, type: 'email', message: 'Valid email required' }]}
                >
                  <Input 
                    placeholder="absar@example.com" 
                    className="bg-transparent border-b border-primary/10 rounded-none focus:border-primary text-white placeholder:text-white/50 transition-colors h-10 outline-none hover:border-primary/30"
                    style={{ color: '#fff' }}
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="message"
                label={<span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">--body-payload (Message)</span>}
                rules={[{ required: true, message: 'Message cannot be empty' }]}
              >
                <TextArea 
                  rows={4} 
                  placeholder="Type your message here..."
                  className="bg-primary/5 border border-primary/10 rounded-lg p-4 focus:border-primary text-white placeholder:text-white/50 transition-colors resize-none outline-none hover:border-primary/20"
                  style={{ color: '#fff' }}
                />
              </Form.Item>

              <div className="flex items-center justify-end pt-6">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold h-12 px-10 border-none transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                >
                  <span>EXECUTE_SEND</span>
                  <span className="material-symbols-outlined text-xl">send</span>
                </Button>
              </div>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
