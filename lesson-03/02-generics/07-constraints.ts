interface Countable {
  count: number;
};

//<T extends Countable> - ограничение, указывающее на то, что T (type variable) должен быть типом данных, реализующим интерфейс Countable, поскольку логика класса SortableList предполагает использование свойства count
class SortableList<T extends Countable> {
  private data: T[] = [];

  public add(item: T) {
    this.data.push(item);
  }

  public showSorted() {
    //(a, b) => a.count - b.count - это выражение компилируется благодаря ограничением. TS компилятор знает, что тип данных передан как T и будет содержать свойство count
    let sorted: T[] = this.data.sort((a, b) => a.count - b.count);
    console.log(sorted);
  }
};

class OrdersArchive implements Countable {
  constructor(
    public month: string,
    public count: number,
    public totalAmount: number,
  ) {}
};

const list = new SortableList<OrdersArchive>();

list.add(new OrdersArchive('January', 5, 23400));
list.add(new OrdersArchive('February', 2, 18100));
list.add(new OrdersArchive('March', 10, 22900));

list.showSorted();
