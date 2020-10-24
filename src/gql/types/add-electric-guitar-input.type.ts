import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddElectricGuitarInputType {
  @Field()
  name: string;

  @Field()
  brand: string;

  @Field()
  price: number;

  @Field()
  numberOfStrings: number;

  @Field()
  numberOfFrets: number;

  @Field({ nullable: true })
  bridgePickup: string | null;

  @Field({ nullable: true })
  middlePickup: string | null;

  @Field({ nullable: true })
  neckPickup: string | null;
}
