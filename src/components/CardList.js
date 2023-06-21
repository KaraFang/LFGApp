import React from "react";
import Card from './Card';
import { users } from '../users';

const CardList = () => {
    return (
      <div>
        {users.map((user) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              battleTag={user.battleTag}
              lvRange={user.lvRange}
              type={user.type}
              characterClass={user.characterClass}
              dungeon={user.dungeon}
            />
          );
        })}
      </div>
    );
}

export default CardList;