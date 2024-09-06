/** @format */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Define types for the props
interface CustomButtonProps {
  clickFunction: string | (() => void); // Either a string for navigation or a function to execute
  bgColor?: string; // Optional background color
  radius?: string; // Optional border radius
  paddingTopBottom?: string; // Optional padding for top and bottom
  width?: string; // Optional width
  height?: string; // Optional height
  btnIcon?: any; // Optional image source
  btnName?: string; // Optional button text
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const router = useRouter();

  const click = () => {
    if (typeof props.clickFunction === 'string') {
      router.push(`${props.clickFunction}`);
    } else {
      props.clickFunction();
    }
  };

  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.bgColor,
        borderRadius: props.radius,
        padding: props.paddingTopBottom,
        width: props.width,
        height: props.height,
      }}
      onClick={click}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        {props.btnIcon && <Image src={props.btnIcon} alt={props.btnName || 'Button icon'} />}
        {props.btnName}
      </div>
    </button>
  );
}

export default CustomButton;
