with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "hello-voter-dev";

  buildInputs = [steam-run]

  shellHook = ''
      alias co="steam-run cypress open"
    '';
}
