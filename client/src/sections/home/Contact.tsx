import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'

import React from 'react'
import MainCard from '../../components/MainCard'
import ContactCard from '../../components/ContactCard'

const Contact: React.FC = () => {
  const handleCopyEmail = () => {
    toast.info('Email copied to clipboard!')
    navigator.clipboard.writeText('darrylemiles.work@gmail.com')
  }

  const handleCopyPhone = () => {
    toast.info('Phone number copied to clipboard!')
    navigator.clipboard.writeText('+63 961 995 7794')
  }

  return (
    <MainCard
      title={{
        text: 'Contact',
        icon: <MdOutlinePhoneInTalk size={24} />,
      }}
      caption='Feel free to reach out to me anytime'
    >
      <ContactCard
        icon={<MailOutlined style={{ fontSize: 24, color: `#8EC5FF` }} />}
        label="Email"
        value="darrylemiles.work@gmail.com"
        onCopy={handleCopyEmail}
      />

      <ContactCard
        icon={<PhoneOutlined style={{ fontSize: 24, color: `#8EC5FF` }} />}
        label="Phone"
        value="+63 961 995 7794"
        onCopy={handleCopyPhone}
      />
    </MainCard>
  )
}

export default Contact