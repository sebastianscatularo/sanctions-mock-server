import SANCTIONATED_ADDRESSES from "etc/addresses.json";

export default function isSanctionated(address: string): boolean {
  return SANCTIONATED_ADDRESSES.some(
    (sanctionated) => sanctionated.toLowerCase() === address.toLowerCase(),
  );
}
