function formatToMoney(data: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(data);
}

export default formatToMoney;
