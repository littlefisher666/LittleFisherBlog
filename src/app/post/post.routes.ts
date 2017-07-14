import {PostListComponent} from "./post-list/post-list.component";
export const postRoutes = [
  {
    path: "",
    redirectTo: "page/1",
    pathMatch: "full"
  },
  {
    path: "page/:page",
    component: PostListComponent
  }
]
