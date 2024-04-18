import { Card, Skeleton, SkeletonText, CardBody } from '@chakra-ui/react';
import React from 'react';

const GameCardSketeton = () => {
  return (
    <Card>
      <Skeleton
        width="300px"
        height="200px"
        borderRadius={10}
        overflow="hidden"
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSketeton;
