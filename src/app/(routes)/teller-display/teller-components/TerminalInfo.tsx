import React from 'react'
import {Card, CardBody} from "@nextui-org/card";

interface TerminalInfoProps {
  children?: React.ReactNode;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

const TerminalInfo: React.FC<TerminalInfoProps> = ({padding, justifyContent, alignItems, gap, color, fontSize, fontWeight}) => {

  return (
    <Card className='flex m-3 w-[98%] h-[94%] overflow-hidden'>
      <CardBody className='flex overflow-hidden' style={{ alignItems, justifyContent, gap, padding, color, fontSize, fontWeight}}>
      <div>USER NAME: TONY STARK</div>
      <div>GROUP NAME: BILLING</div>
      <div>TERMINAL NAME: PAYMENTS</div>
      </CardBody>
    </Card>
  )
}

export default TerminalInfo;