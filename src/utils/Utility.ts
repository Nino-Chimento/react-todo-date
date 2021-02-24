export class Utility {
  static clone = (object: object): any => JSON.parse(JSON.stringify(object));
}

export const formattedPrice = (cards: any): number => {
  let count: number = 0;
  cards.forEach((card: any) => {
    count += card.original_retail_price.value;
  });
  return count;
};

export const IsInArray = (cards: any, obj: any) => {
  return cards.includes(obj);
};
