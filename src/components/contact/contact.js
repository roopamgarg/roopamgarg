import React from "react";
import { PageHeader, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

const Contact = props => (
  <div>
    <PageHeader
      style={{
        border: "1px solid rgb(235, 237, 240)"
      }}
      title="Contact"
    />
    <form className="contact-form fadeIn" action="https://formspree.io/mgeovzkr" method="POST">
        <div className="pb-1 pt-2">
      <TextArea rows={8} placeholder="Your Message" name="name" />
      </div>
      <div className="pb-1">
      <Input type="email" required placeholder="Your Email" name="_replyto" />
      </div>
      <div className="text-center">
      <Button type="primary" size="large" htmlType="submit">
        Send
      </Button>
      </div>
    </form>
  </div>
);

export default Contact;
