export const roleObj = {
  1: 'Admin',
  2: 'Petugas Official',
  3: 'Petugas Volunteer',
  4: 'Checker'
}

export type RoleKey = keyof typeof roleObj

export const roles = [
  {
    value: 1,
    label: 'Admin',
  },
  {
    value: 2,
    label: 'Petugas Official',
  },
  {
    value: 3,
    label: 'Petugas Volunteer',
  },
  {
    value: 4,
    label: 'Checker',
  },
]
