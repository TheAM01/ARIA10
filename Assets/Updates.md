# ARIA 1.10 Update log:

Released: 2-1-22

Stability: Stable

Build: ` Public 220221:011 `

---


## 1.10 Features:

- Added Guild info command in utility sector.
- Added avatar command in utility sector.
- Fixed minor bugs in the Member info command in utility sector.
- Added all commands list command in the Miscellaneous sector.
- Added timeout info in the help info of commands.
- Introduced dash-arguments.
- Fixed minor bugs.
- Improved in-code utility.
- Code utility format changes.

---

### Added thr guild info command
The guild info command returns information regarding the current guild including the date created, the owner, members and roles.

### Added the avatar command
The avatar command displays the avatar of a user. It accepts one optional argument [target] which is the person whose avatar is required to be displayed. By default it is ` -s ` (self). Its value can be the mention of the target user.

### Minor bug fixing in the Member info command
Minor date errors & display bugs have been fixed.


### Added the list command
The list command works similar to the ` !Help All ` command. It returns a list of all available commands.

### Added timeout info of commands 
Time out info of the command (if available) is shown in the help info of the command. Use ` !Help [command] ` to see its help info & timeout info.

### Introduced dash arguments
*BETA feature under development. Will be implemented soon.*

### Minor bug fixing
As always, this update comes with minor bug fixing. Nothing fancy.

### Improved in-code utility
In-code utility and naming is made easier. More comments have been added to make the code more understandable and enhance readability.

### Changed code utility format
Improved the ` utility.js ` module with better function naming and new and better date formatting function: ` preciseDate() `