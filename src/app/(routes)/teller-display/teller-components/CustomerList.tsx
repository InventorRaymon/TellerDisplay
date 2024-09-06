import React from 'react';
import { Avatar, Card, CardBody, Badge, Button, Image, AvatarGroup } from "@nextui-org/react";


interface CustomerListProps {
  width?: string;
}

const CustomerList: React.FC<CustomerListProps> = ({ width }) => {
  return (
    <div className='flex m-3 w-[89%] h-[97%] overflow-hidden'>
      <Card className='flex w-full h-full'>
        <CardBody className='w-full h-full justify-between items-center p-[15px] overflow-hidden'>
          <AvatarGroup max={5} total={10} className='flex flex-col justify-center gap-3 items-center' >
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              color='success'
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              style={{ width: '4vw', height: '8.5vh' }}
            />
          </Badge>
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              color='success'
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              style={{ width: '4vw', height: '8.5vh' }}
            />
          </Badge>
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              color='success'
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              style={{ width: '4vw', height: '8.5vh' }}
            />
          </Badge>
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              color='success'
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              style={{ width: '4vw', height: '8.5vh' }}
            />
          </Badge>
          <Badge content="5" color="danger" shape="circle">
            <Avatar
              isBordered
              radius="full"
              color='success'
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              style={{ width: '4vw', height: '8.5vh' }}
            />
          </Badge>
          </AvatarGroup>
          <Button className='rounded-full bg-white' style={{ width: '100px', height: '100px' }} >
            <Image src='/assets/img/hidebtn.png'/>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default CustomerList;