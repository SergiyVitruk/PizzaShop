import { Title } from "./title";
import { Input } from "../ui";
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from ".";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be assembled" value="1" />
        <FilterCheckbox text="New items" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price($) from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={600}
            defaultValue={0}
          />
          <Input
            type="number"
            min={10}
            max={600}
            value={600}
            placeholder="600"
          />
        </div>
        <RangeSlider min={0} max={600} step={2} value={[0, 600]} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        name="toppings"
        title="Toppings"
        limit={6}
        defaultItems={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Red onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
