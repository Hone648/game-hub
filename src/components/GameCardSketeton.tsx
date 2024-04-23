import { Card, Skeleton, SkeletonText, CardBody } from '@chakra-ui/react';

const GameCardSketeton = () => {
  return (
    <Card>
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSketeton;
