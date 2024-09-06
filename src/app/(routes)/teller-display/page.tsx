'use client'
import React from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import Container from "../../../../public/assets/img/Container.svg";
import Header from './teller-components/Header';
import TellerCard from './teller-components/TerminalInfo';
import TransactionButton from './teller-components/TransactionButton';
import TellerAvatar from './teller-components/CustomerList';
import { FaUser, FaCircleCheck, FaPhone, FaPhoneVolume, FaForwardFast, FaShare, FaTableList, FaClock } from "react-icons/fa6";
import { exampleLayout } from '../../../data/sampleLayout';
import TerminalInfo from './teller-components/TerminalInfo';
import NowServing from './teller-components/NowServing';
import CustomerList from './teller-components/CustomerList';

const ResponsiveGridLayout = WidthProvider(Responsive);
const tellerDisplay = () => {
  const iconMapping = {
    FaUser: <FaUser/>,
    FaPhone: <FaPhone/>,
    FaForwardFast: <FaForwardFast/>,
    FaTableList: <FaTableList/>,
    FaCircleCheck: <FaCircleCheck/>,
    FaPhoneVolume: <FaPhoneVolume/>,
    FaShare: <FaShare/>,
    FaClock: <FaClock/>,
  }
  return (
    <ResponsiveGridLayout
      layouts={{ lg: exampleLayout.layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={70}
      compactType={null}
      measureBeforeMount={false}
      useCSSTransforms={true}
      preventCollision={false}
      margin={[0, 0]}
      containerPadding={[0, 0]}
    >
      {exampleLayout.items.map((item) =>
        item.name === 'Container' ? (
          <div
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            style={{
              margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
            }}
          >
          </div>
        ) : item.name === 'TransactionButton' ? ( // Check if item is a Terminal
          <div
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            style={{
              margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
            }}
            className='overflow-hidden'
          >
            <TransactionButton 
            buttonLabel={item.label} 
            buttonIcon={iconMapping[item.icon]} 
            style={{
              backgroundColor: item.backgroundColor,
              fontSize: item.fontSize,
              color: item.color,
              fontStyle: item.fontStyle,
              fontWeight: item.fontWeight,
              fontFamily: item.fontFamily,
              margin: `${item.marginTop1}px ${item.marginRight1}px ${item.marginBottom1}px ${item.marginLeft1}px`,
            }}
            />
          </div>
        ) : item.name === 'Header' ? ( // Check if item is a Terminal
          <div
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            style={{
              margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
            }}
          >
            <Header 
              style={{
                backgroundColor: item.backgroundColor,
                fontSize: item.fontSize,
                color: item.color,
                fontStyle: item.fontStyle,
                fontWeight: item.fontWeight,
                fontFamily: item.fontFamily,
                margin: `${item.marginTop1}px ${item.marginRight1}px ${item.marginBottom1}px ${item.marginLeft1}px`,
              }}
            />
          </div>
        ) : item.name === 'TerminalInfo' ? ( // Check if item is a Terminal
          <div
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            style={{
              margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
            }}
          >
            <TerminalInfo fontSize='23px' fontWeight='900' color='#000' alignItems={'start'} justifyContent={'center'} gap='30px' padding='30px'/>
          </div>
        ) : item.name === 'NowServing' ? ( // Check if item is a Terminal
          <div
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            style={{
              margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
            }}
          >
            <NowServing />
          </div>
        ) : item.name === 'CustomerList' ? ( // Check if item is a Terminal
          <div
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            style={{
              margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
            }}
          >
            <CustomerList />
          </div>
        ) : (
          !item.containerId && (
            <div
              key={item.i}
              data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
              style={{
                height: `${item.h * 100}px`,
                width: `${item.w * 100}px`,
                backgroundColor: item.backgroundColor,
                color: item.color,
                margin: `${item.marginTop}px ${item.marginRight}px ${item.marginBottom}px ${item.marginLeft}px`,
              }}
            >
              <div style={{
                // color: item.color1,
                fontSize: `${item.fontSize}px`,
                fontFamily: item.fontFamily,
                fontStyle: item.fontStyle,
                margin: `${item.marginTop1}px ${item.marginRight1}px ${item.marginBottom1}px ${item.marginLeft1}px`,
                // opacity: item.opacity1
              }}>
                {item.name}
              </div>
            </div>
          )
        )
      )}
    </ResponsiveGridLayout>
  )
}

export default tellerDisplay