import React from 'react';
import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

import { AvatarProps } from '../../utils/interfaces';

import friendsInfo from '../../utils/data/friendsInfo.json';

const AvatarList: React.FC = (): JSX.Element => {
  return (
    <AvatarGroup max={4}>
      {friendsInfo.map((friend: AvatarProps) => (
        <Avatar alt={`foto de perfil de ${friend.name}`} src={friend.photo} />
      ))}
    </AvatarGroup>
  );
};

export default AvatarList;
