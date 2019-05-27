workflow "Build, Test, and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  needs = "Install"
  uses = "actions/npm@master"
  args = "build"
}

action "Publish" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
