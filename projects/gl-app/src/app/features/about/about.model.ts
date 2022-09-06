export interface ITeam {
  name: string;
  members: Array<ITeamMember>;
}

export interface ITeamMember {
  firstName: string;
  lastName: string;
  position: string;
  avatar: string;
}
