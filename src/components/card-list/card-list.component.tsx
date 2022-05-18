import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';
import { Monster } from '../../App';

type CardListProps = {
  monsters: Monster[]
}

export const CardList = ({ monsters }: CardListProps) => {
  return <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />
    })}
  </div>
}