import React from 'react';
import {Button} from "@nextui-org/react";

interface transactionButtonProps {
  buttonLabel?: string;
  buttonIcon?: React.ReactNode;
  style?: React.CSSProperties;
}

const TransactionButton: React.FC<transactionButtonProps> = ({buttonLabel, buttonIcon, style}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center m-3 w-[92%] h-[90%] overflow-hidden">
      <Button className='w-full h-full' style={style}>
        {buttonIcon}
        {buttonLabel}
      </Button> 
    </div>
  )
}

export default TransactionButton;