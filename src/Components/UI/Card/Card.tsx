import React, { useState } from 'react';
import styles from './Card.module.css'
/* eslint-disable */
// @ts-ignore
import { CreateCard } from '../CreateCard/CreateCard';
import useCustomToast from '../Hooks/useShowToats';
import { ToastContainer } from 'react-toastify';
/* eslint-enable */
export default function Card({
  title,
  addCard,
  seeAll,
  balance, 
  validationDate, 
  cardHolderName,
  cardNumber,
  background,
  hideGradient,
  gradientWidth,
  gradientColor,
  onClose
} : { 
  title?: string,
  addCard?: string, 
  seeAll?: string,
  balance?: string, 
  validationDate?: string, 
  cardHolderName?: string, 
  cardNumber?: string, 
  background?: string, 
  hideGradient?: boolean,
  gradientWidth?: string,
  gradientColor?: string,
  onClose?: () => void;
}) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showToast } = useCustomToast();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    onClose?.(); 
    setIsModalOpen(false);
  };

  const handleAddCard = () => {
    showToast('success', 'Your card has been created!');
  };

  return (
    <div className={styles.myCards}>
      <ToastContainer />
      <div className={styles.cardsTitle}>{title}</div>
      <div className={styles.cardsTitleBox} style={{ justifyContent: 'right', display: 'flex' }}>
        <button className={styles.addCard}>
          {seeAll}
        </button>
        <button className={styles.addCard} onClick={handleOpenModal}>
          {addCard}
        </button>
      </div>
      <div 
        className={styles.cardItems}
        style={{ background: background }}
      >
        <div className={styles.balanceBox}>
          <div className={styles.balanceItems}>
            <p>Balance</p>
            <div className={styles.balance}>{balance}</div>
          </div>
          <img src="/img/Cards/chipCard.svg" alt="chip" />
        </div>
        <div className={styles.clientInfo}>
          <div className={styles.nameBox}>
            <p>CARD HOLDER</p>
            <div className={styles.cardHolderName}>{cardHolderName}</div>
          </div>
          <div className={styles.validationDateBox}>
            <p>VALID THRU</p>
            <div className={styles.validationDate}>{validationDate}</div>
          </div>
        </div>
        <div className=
          {`${styles.cardFooter} ${hideGradient ? styles.hideGradient : ''}`}
          style={{
            "--gradient-width": gradientWidth,
            "--gradient-color": gradientColor,
          } as React.CSSProperties}
        >
          <div className={styles.cardNumber}>{cardNumber}</div>
          <img src="/img/Cards/visa.svg" alt="visa" />
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <CreateCard
              innerTitle='Add Credit Card'
              label='Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.'
              cardType={true}
              nameOnCard={true}
              cardNumber={true}
              expirationDate={true}
              button='Add Card'
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  )
}