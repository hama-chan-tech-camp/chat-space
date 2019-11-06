# Load DSL and set up stages
# require "istrano/setup"

# # Include default deployment tasks
# require "istrano/deploy"

# Load the SCM plugin appropriate to your project:
#
# require "istrano/scm/hg"
# install_plugin istrano::SCM::Hg
# or
# require "istrano/scm/svn"
# install_plugin istrano::SCM::Svn
# or
# require "istrano/scm/git"
# install_plugin istrano::SCM::Git

# Include tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
#
#   https://github.com/istrano/rvm
#   https://github.com/istrano/rbenv
#   https://github.com/istrano/chruby
#   https://github.com/istrano/bundler
#   https://github.com/istrano/rails
#   https://github.com/istrano/passenger
#
# require "istrano/rvm"
# require "istrano/rbenv"
# require "istrano/chruby"
# require "istrano/bundler"
# require "istrano/rails/assets"
# require "istrano/rails/migrations"
# require "istrano/passenger"
require "capistrano/setup"
require "capistrano/deploy"
require 'capistrano/rbenv'
require 'capistrano/bundler'
require 'capistrano/rails/assets'
require 'capistrano/rails/migrations'
require 'capistrano3/unicorn'

# Load custom tasks from `lib/istrano/tasks` if you have any defined
Dir.glob("lib/istrano/tasks/*.rake").each { |r| import r }
