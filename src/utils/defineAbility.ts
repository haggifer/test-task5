import { AbilityBuilder, createMongoAbility } from '@casl/ability'
import { IUser } from 'typescript/entities';

export default function defineAbilityFor(user: IUser | null) {
  const { can, build } = new AbilityBuilder(createMongoAbility);

  if (user?.role === 'admin') {
    can('manage', 'adminData')
  }

  return build();
}