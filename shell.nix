{ pkgs ? import <nixpkgs> { }, packages ? [ ] }:

pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs_21
  ];
}