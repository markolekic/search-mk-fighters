const fighters = [
  {
    id: 1,
    name: 'ashrah',
    origin: 'netherrealm',
    species: 'demon',
    img: './images/ashrah.png',
    desc: `Despite having the appearance of an elegant, old-fashioned, attractive young woman, Ashrah is actually a demon from the Netherrealm. Despite Ashrah's origin as a demon, she wields holy powers as a side effect of wielding the Kriss.`,
    info: 'https://mortalkombat.fandom.com/wiki/Ashrah'
  },
  {
    id: 2,
    name: 'baraka',
    origin: 'outworld',
    species: 'tarkatan',
    img: './images/baraka.png',
    desc: `A general of the Tarkatan Horde, he has serving Outworld and its Empire while being loyal to the half-Tarkatan Mileena and her father Shao Kahn. As with all Tarkatans, Baraka is cannabalistic and possesses long, retractable blades.`,
    info: 'https://mortalkombat.fandom.com/wiki/Baraka'
  },
  {
    id: 3,
    name: 'blaze',
    origin: 'netherrealm',
    species: 'elemental',
    img: './images/blaze.png',
    desc: `Blaze is one of the three most powerful beings in the Mortal Kombat universe alongside Onaga and Dark Kahn. As his name and appearance suggests, he has control over fire, lava, heat, etc.`,
    info: 'https://mortalkombat.fandom.com/wiki/Blaze'
  },
  {
    id: 4,
    name: "bo' rai cho",
    origin: 'outworld',
    species: 'outworlder',
    img: './images/bo-rai-cho.png',
    desc: `The Outworld-born master of the Drunken Fist, Bo' Rai Cho serves as a major ally to the God of Thunder Raiden. He is a jovial, obese, drunken master of martial arts. He enjoys drinking alcoholic beverages and is infamous for his "Puke Puddle" move.`,
    info: 'https://mortalkombat.fandom.com/wiki/Bo%27_Rai_Cho'
  },
  {
    id: 5,
    name: 'cassie cage',
    origin: 'earthrealm',
    species: 'human',
    img: './images/cassie.png',
    desc: `Cassie is a former sergeant, the current commander serving in the Special Forces, and the daughter of Johnny Cage and Sonya Blade. She is a stereotypical millennial, sporting many of the most iconic trends and technologies of her generation.`,
    info: 'https://mortalkombat.fandom.com/wiki/Cassie_Cage'
  },
  {
    id: 6,
    name: 'centrion',
    origin: 'heaven',
    species: 'elder god',
    img: './images/cetrion.png',
    desc: `Cetrion is an Elder Goddess who is the sister and counterpart of Shinnok and one of the deities responsible for banishing him to the Netherrealm. She is also the daughter of Kronika, and following her vision.`,
    info: 'https://mortalkombat.fandom.com/wiki/Cetrion'
  },
  {
    id: 7,
    name: 'chameleon',
    origin: 'zaterra',
    species: 'saurian',
    img: './images/chamaleon.png',
    desc: `Chameleon is a ninja who utilizes camouflage during fights. He is referred to as "one of Shao Kahn's deadliest warriors". The emperor hired Chameleon to prevent the warriors of Earthrealm from winning the Mortal Kombat tournament.`,
    info: 'https://mortalkombat.fandom.com/wiki/Chameleon'
  },
  {
    id: 8,
    name: 'cyrax',
    origin: 'earthrealm',
    species: 'cyborg',
    img: './images/cyrax.png',
    desc: `Cyrax was one of the three cybernetic ninjas created by the Lin Kuei, in an effort to convert all members into unfeeling, cold-hearted, cybernetic assassins to improve their performance. Of the three cyborgs, he has become the first to recover his humanity.`,
    info: 'https://mortalkombat.fandom.com/wiki/Cyrax'
  },
  {
    id: 9,
    name: "d'vorah",
    origin: 'outworld',
    species: 'kytinn',
    img: './images/dvorah.png',
    desc: `She formerly served as Kotal Kahn's first minister. D'Vorah's primary motive is The Hive's survival, the birth place of all other Kytinn, as she is the last known living member of her species.`,
    info: 'https://mortalkombat.fandom.com/wiki/D%27Vorah'
  },
  {
    id: 10,
    name: 'daegon',
    origin: 'edenia',
    species: 'demi-god',
    img: './images/daegon.png',
    desc: `Daegon is the brother of Taven, son of the Edenian protector god Argus and the prophet Delia, and half-brother of Rain. Daegon reveals that he killed his family because Shinnok had told him they favored Taven.`,
    info: 'https://mortalkombat.fandom.com/wiki/Daegon'
  },
  {
    id: 11,
    name: 'dairou',
    origin: 'orderrealm',
    species: 'seidan',
    img: './images/dairou.png',
    desc: `He is a former Seidan guard, who was imprisoned for killing the man who murdered his family. After escaping prison Dairou went rogue and decided to work as a mercenary. He takes assignments where he can find them, whether they are noble or not.`,
    info: 'https://mortalkombat.fandom.com/wiki/Dairou'
  },
  {
    id: 12,
    name: 'darrius',
    origin: 'orderrealm',
    species: 'seidan',
    img: './images/darrius.png',
    desc: `Ambitious and unscrupulous man whose intricate schemes further his own ambitions. To his followers, he is a revolutionary and visionary. To his foes and other people, he is a terrorist. He is most known for the massive riots he starts in Orderrealm.`,
    info: 'https://mortalkombat.fandom.com/wiki/Darrius'
  },
  {
    id: 13,
    name: 'drahmin',
    origin: 'netherrealm',
    species: 'oni',
    img: './images/drahmin.png',
    desc: `Drahmin was not always a demon; as centuries ago, he was a cruel human warlord in Outworld. For his crimes, he died and was exiled to the Netherrealm where his body and soul were to be tortured for all eternity. As the years dragged on, he fell further and further into insanity until his humanity was lost altogether.`,
    info: 'https://mortalkombat.fandom.com/wiki/Drahmin'
  },
  {
    id: 14,
    name: 'ermac',
    origin: 'outworld',
    species: 'fussion of souls',
    img: './images/ermac.png',
    desc: `Ermac rarely shows any signs of emotion, but he has proven to be quite wise and a very deadly combatant, using his telekinetic abilities to battle multiple opponents at once while keeping the upper hand. Ermac has been seen as a neutral character that sides with those looking to better his native realm of Outworld, most notably finding a proper ruler.`,
    info: 'https://mortalkombat.fandom.com/wiki/Ermac'
  },
  {
    id: 15,
    name: 'erron black',
    origin: 'outworld',
    species: 'human',
    img: './images/erron.png',
    desc: `Outworld mercenary and former member of the Black Dragon, Erron is an Outlander that serves closely to the Outworld throne, serving whoever is ruler of Outworld. Although he resides in Outworld, Erron was born and raised in 19th century Texas.`,
    info: 'https://mortalkombat.fandom.com/wiki/Erron_Black'
  },
  {
    id: 16,
    name: 'ferra & torr',
    origin: 'outworld',
    species: 'symbiotic race',
    img: './images/ftorr.png',
    desc: `Symbiote pairing consisting respectively of a young female rider and a giant masked brute, and were found wandering the Tarkatan wastelands before being made to serve as new Outworld emperor Kotal Kahn's personal bodyguards. They are of an Outworld species in which the rider bonds with its mount.`,
    info: 'https://mortalkombat.fandom.com/wiki/Ferra_%26_Torr'
  },
  {
    id: 17,
    name: 'frost',
    origin: 'earthrealm',
    species: 'cyborg',
    img: './images/frost.png',
    desc: `Her dedication to fighting and learning is overshadowed by her desire to be noticed, and a corresponding hostility towards anyone she perceives to be greater than her, including her own master.`,
    info: 'https://mortalkombat.fandom.com/wiki/Frost#'
  },
  {
    id: 18,
    name: 'fujin',
    origin: 'heaven',
    species: 'god',
    img: './images/fujin.png',
    desc: `Fujin is in complete control of all things related to wind. He serves as a beacon of hope to the people of Earthrealm, helping to inspire and uplift their spirits with his relatively optimistic view of life.`,
    info: 'https://mortalkombat.fandom.com/wiki/Fujin'
  },
  {
    id: 19,
    name: 'geras',
    origin: "kronika's keep",
    species: 'artificial construct',
    img: './images/geras.png',
    desc: `Geras is a loyal and powerful servant of the Keeper of Time and Architect of the Universe's destiny, Kronika. As a creation of Kronika herself, Geras possesses god-like strength and the ability to manipulate the sands of time. His most notable attribute, however, is his imperviousness to death.`,
    info: 'https://mortalkombat.fandom.com/wiki/Geras'
  },
  {
    id: 20,
    name: 'goro',
    origin: "outworld",
    species: 'shokan',
    img: './images/goro.png',
    desc: `A well known Shokan, he is a powerful kombatant and ranks high above the Shokan as Prince of the Shokan. He is a frequent, recurring antagonist in the series and major ally to the sorcerer Shang Tsung.`,
    info: 'https://mortalkombat.fandom.com/wiki/Goro'
  },
  {
    id: 21,
    name: 'havik',
    origin: "chaosrealm",
    species: 'chaosrealmer',
    img: './images/havik.png',
    desc: `Cleric of Chaos and an anarchist. Neither good nor evil, his ambitions are only to spread discord. He is known to be a frequent troublemaker in the Realm of Order, and is heralded as a hero by the populace of the Chaosrealm, where he has formed an alliance with the revolutionary Darrius.`,
    info: 'https://mortalkombat.fandom.com/wiki/Havik'
  },
  {
    id: 22,
    name: 'hotaru',
    origin: "orderrealm",
    species: 'seidan',
    img: './images/hotaru.png',
    desc: `Hotaru is a general from the realm of Seido, the Realm of Order, and devotes himself to preserving law and order at any cost. So much so that he could be described as a zealot. He preserves law and order and harshly punishes those who dare break it.`,
    info: 'https://mortalkombat.fandom.com/wiki/Hotaru'
  },
  {
    id: 23,
    name: 'hsu hao',
    origin: "earthrealm",
    species: 'human',
    img: './images/hsuhao.png',
    desc: `Hsu Hao is an evil, deceptive Mongolian grappler member of the Red Dragon clan. He infiltrated the Special Forces with the sole purpose of destroying them after he had aided them in destroying the Black Dragon crime clan. Instead of a heart, Hsu Hao has a pulsating cybernetic implant that also enhances his strength.`,
    info: 'https://mortalkombat.fandom.com/wiki/Hsu_Hao'
  },
  {
    id: 24,
    name: 'jacqui',
    origin: "earthrealm",
    species: 'human',
    img: './images/jacqui.png',
    desc: `A close friend to Cassie Cage, Jacqui Briggs is the daughter of Jackson Briggs. Despite her father not approving her decision to join the Special Forces, Jacqui sees it as her duty to protect Earthrealm and to avenge her father from the suffering he endured from Quan Chi and Ermac.`,
    info: 'https://mortalkombat.fandom.com/wiki/Jacqui_Briggs'
  },
  {
    id: 25,
    name: 'jade',
    origin: "edenia",
    species: 'edenian',
    img: './images/jade.png',
    desc: `Jade is a childhood friend of Princess Kitana. While her motives were unclear, she served Shao Kahn alongside Kitana and Mileena as his personal assassin for most of her life. She has a romantic relationship with Kotal Kahn.`,
    info: 'https://mortalkombat.fandom.com/wiki/Jade'
  },
  {
    id: 26,
    name: 'jarek',
    origin: "earthrealm",
    species: 'human',
    img: './images/jarek.png',
    desc: `Jarek was depicted as the brutish and short-tempered second-in-command of the Black Dragon clan. In the games, he initially utilized special moves and fatalities popularized by Kano, a trait later explained by stating that Jarek was once a student of his.`,
    info: 'https://mortalkombat.fandom.com/wiki/Jarek'
  },
  {
    id: 27,
    name: 'jax',
    origin: "earthrealm",
    species: 'human',
    img: './images/jax.png',
    desc: `Major Jackson "Jax" Briggs is a cybernetically-enhanced soldier who is the leader of the Outer World Investigation Agency (OIA), Earthrealm's Special Forces unit. When the need arises, he is a beast on the battlefield with the attitude and ferocity of a lion.`,
    info: 'https://mortalkombat.fandom.com/wiki/Jax_Briggs'
  },
  {
    id: 28,
    name: 'johnny cage',
    origin: "earthrealm",
    species: 'human',
    img: './images/johnny.png',
    desc: `Jonathan Carlton, better known by his stage name Johnny Cage, is an action movie star and martial artist. Despite his materialism, airheadedness, and occasional immaturity, Cage is a brave and loyal warrior, although his antics frequently annoy his allies.`,
    info: 'https://mortalkombat.fandom.com/wiki/Johnny_Cage'
  },
  {
    id: 29,
    name: 'kabal',
    origin: "earthrealm",
    species: 'human',
    img: './images/kabal.png',
    desc: `He was a mysterious warrior who survived an attack from one of Shao Kahn's extermination squads and, as a result, gained a horrifying visage concealed only by his respiratory mask. His ending reveals that he was actually a member of the Black Dragon. He appeared as a force for good, but eventually reverted to his evil ways, planning to place himself as the head of the new Black Dragon clan.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kabal'
  },
  {
    id: 30,
    name: 'kai',
    origin: "earthrealm",
    species: 'human',
    img: './images/kai.png',
    desc: `Kai was part of the White Lotus Society and trained with Liu Kang and Kung Lao. As a result, he has very nimble moves such as his Renegade Kick, and fire projectiles similiar to Liu Kang's, albeit slightly different in terms of execution like his Downward and Upward Fireball techniques.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kai'
  },
  {
    id: 31,
    name: 'kano',
    origin: "earthrealm",
    species: 'human',
    img: './images/kano.png',
    desc: `He is the first Black Dragon clan member featured in the series and has been a recurring antagonist to the franchise since his debut. He serves as a major antagonist towards Sonya Blade and her family. Originally from Australia, Kano is highly opportunistic and incredibly selfish, willing to betray his own realm and even his own allies for money or personal gain.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kano'
  },
  {
    id: 32,
    name: 'kenshi',
    origin: "earthrealm",
    species: 'human',
    img: './images/kenshi.png',
    desc: `Kenshi is a rogue swordsman of Eurasian heritage who possesses psychokinetic powers and nurses a bitter hatred for the evil sorcerer named Shang Tsung, whose deceit had resulted in Kenshi's living. Kenshi wields an ancestral sword that contains the spirits of warrior kings from his line, and he is in turn guided by these spirits in combat.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kenshi'
  },
  {
    id: 33,
    name: 'khameleon',
    origin: "zaterra",
    species: 'saurian',
    img: './images/khameleon.png',
    desc: `Khameleon reached Reptile and told him the truth of how Kahn was responsible for the extinction of their race. However, Reptile fell under the emperor's influence once again and turned against her. Having failed in her attempts to slay Shao Kahn, she began to wander the realms contemplating a way to strike back at him.`,
    info: 'https://mortalkombat.fandom.com/wiki/Khameleon'
  },
  {
    id: 34,
    name: 'kintaro',
    origin: "outworld",
    species: 'shokan',
    img: './images/kintaro.png',
    desc: `He is the only member of his race seen thus far to have unique features. Unlike Goro and Sheeva, Kintaro has tiger striped markings all over his body as well as sharp fangs, claws and feline-like feet. This is indicative of the lower-class Tigrar clan of Shokan, differing from the more elite-class Draco clan that Goro and Sheeva belong to.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kintaro'
  },
  {
    id: 35,
    name: 'kira',
    origin: "earthrealm",
    species: 'human',
    img: './images/kira.png',
    desc: `She is an anarchist, has a courageous personality and her background depicts her as having the ability to take great risks. She possesses a rationality and level-headedness that contrasts her fellow recruit, the hot-blooded Kobra. She is the first of Kabal's recruits for the new Black Dragon.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kira'
  },
  {
    id: 36,
    name: 'kitana',
    origin: "edenia",
    species: 'edenian',
    img: './images/kitana.png',
    desc: `Princess Kitana is 10,000 years old, but is considered young in her realm of Edenia. Throughout the years, she rose to great importance; first as the loyal stepdaughter of Shao Kahn, then as his enemy, tearing herself away from his grasp and freeing her home realm of Edenia. She also led an army into Outworld to combat any chance of Shao Kahn rising to power again.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kitana'
  },
  {
    id: 37,
    name: 'kobra',
    origin: "earthrealm",
    species: 'human',
    img: './images/kobra.png',
    desc: `Infamous for his brutality and savage killings, Kobra shows no mercy to his opponents. He is the second of Kabal's recruits for the new anarchist oriented Black Dragon clan, he is a gifted young martial artist, eager to put his skills to the test.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kobra'
  },
  {
    id: 38,
    name: 'kollector',
    origin: "outworld",
    species: 'naknada',
    img: './images/kollector.png',
    desc: `Kollector is the uncaring and rapacious tribute collector of Shao Kahn. Despite being subservient to his master, he is consumed by greed, caring only for his own wealth and status and will kill anyone who dares challenge it. Though he was born into poverty, he was raised through the ranks and was eventually able to reach the position he holds now.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kollector'
  },
  {
    id: 39,
    name: 'kotal kahn',
    origin: "outworld",
    species: 'osh-tekk',
    img: './images/kotal.png',
    desc: `Kotal Kahn is a warrior from the realm of Osh-Tekk, which was once ruled by Kotal K'etz, his father, but was later merged into Outworld by conquest. After the death of his father, he became the last of his kind. He would eventually usurp Mileena as emperor of Outworld due to his popularity and charisma.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kotal_Kahn'
  },
  {
    id: 41,
    name: 'kronika',
    origin: "kronika's keep",
    species: 'titan',
    img: './images/kronika.png',
    desc: `A being of higher ranking than that of an Elder God. She is the Keeper of Time, Architect of the Destiny of the Universe and mother of Shinnok, the Elder God of Death and Corruption, and Cetrion, the Elder Goddess of Life and Virtue.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kronika'
  },
  {
    id: 42,
    name: 'kung jin',
    origin: "earthrealm",
    species: 'human',
    img: './images/kungjin.png',
    desc: `As a child, Kung Jin admired his uncle Kung Lao and considered him a hero. After his uncle's death, the Kung family lost their family fortunes and moved to the United States of America. Jin became a thief and blamed Raiden for the death of his uncle. However, after meeting the Thunder God, he let go of his resentment and trained under the White Lotus Society, who Jin originally thought would not accept him because of his homosexuality.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kung_Jin'
  },
  {
    id: 43,
    name: 'kung lao',
    origin: "earthrealm",
    species: 'human',
    img: './images/kunglao.png',
    desc: `Kung Lao is a former Shaolin monk and a member of the White Lotus Society. He stands in the shadow of his great ancestor, the Great Kung Lao, but unlike his great ancestor, he has no desire to be champion and would rather live a life of peace. Much like Liu Kang, he has trained under master Bo' Rai Cho. Of the Earthrealm warriors, Lao is the most outspoken pacifist.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kung_Lao'
  },
  {
    id: 44,
    name: 'li mei',
    origin: "outworld",
    species: 'outworlder',
    img: './images/limei.png',
    desc: `Warrior whose village was enslaved by Shang Tsung and Quan Chi. Her people were forced to build a temple from which the Deadly Alliance would summon the Soulnado. She attempted to win her village's freedom in a tournament hosted by Shang Tsung, but was betrayed. Her soul was subsequently stolen and placed in one of the Dragon King Onaga's soldiers.`,
    info: 'https://mortalkombat.fandom.com/wiki/Li_Mei'
  },
  {
    id: 45,
    name: 'liu kang',
    origin: "earthrealm",
    species: 'human',
    img: './images/liukang.png',
    desc: `He is one of Earthrealm's greatest warriors, having defeated many to prove his valor. Throughout the series, he has been gradually portrayed as the main hero, becoming champion after the first Mortal Kombat tournament. Liu Kang has found a nemesis in the traitorous Shang Tsung, a sorcerer who he has defeated on numerous occasions.`,
    info: 'https://mortalkombat.fandom.com/wiki/Liu_Kang'
  },
  {
    id: 46,
    name: 'mavado',
    origin: "earthrealm",
    species: 'human',
    img: './images/mavado.png',
    desc: `Mavado is a leading figure, second only to Daegon, within the Red Dragon, which the games reveal to be an ancient criminal organization whose existence is known only to its members, and whose most prominent rivals are the Black Dragon, an offshoot of the Red Dragon which was led by Kano but is now reformed under the leadership of Kabal.`,
    info: 'https://mortalkombat.fandom.com/wiki/Mavado'
  },
  {
    id: 47,
    name: 'meat',
    origin: "netherrealm",
    species: 'genetic experiment',
    img: './images/meat.png',
    desc: `He was a horrific experiment created by Shang Tsung. He escaped the sorcerer's clutches before he could be fully completed. The official strategy guide for the game describes Meat as being "a fun character who assists Shinnok," although this relationship is not made clear in the story.`,
    info: 'https://mortalkombat.fandom.com/wiki/Meat'
  },
  {
    id: 48,
    name: 'mileena',
    origin: "outworld",
    species: 'genetic experiment',
    img: './images/mileena.png',
    desc: `Mileena is a mutant hybrid clone of Kitana, created in Shang Tsung's flesh pits at the behest of Shao Kahn, who had become increasingly paranoid that Kitana would one day learn the truth and betray him. As a fusion of Tarkatan blood and Edenian physiology, Mileena combines and fully utilizes attributes of both races in combat, boasting incredible speed, brute strength, nimble acrobatic prowess, and frightening, carnivorous savagery matched only by Baraka.`,
    info: 'https://mortalkombat.fandom.com/wiki/Mileena'
  },
  {
    id: 49,
    name: 'mokap',
    origin: "earthrealm",
    species: 'human',
    img: './images/mokap.png',
    desc: `Mokap is a motion capture actor with a vast knowledge of martial arts and fighting styles. Mokap has been involved with the events of the latest games, although the circumstances as to how and why are very mysterious and also vague. He seems to continually find himself inexplicably transported to and wrapped up in the battles that have transpired, simply by being in the wrong place at the wrong time.`,
    info: 'https://mortalkombat.fandom.com/wiki/Mokap'
  },
  {
    id: 50,
    name: 'moloch',
    origin: "netherrealm",
    species: 'oni',
    img: './images/moloch.png',
    desc: `Moloch is large and extremely powerful. The orb that is chained to his arm is capable of dealing tremendous damage, and his Oni nature allows him to fight up close to his opponents. With Drahmin at his side, they were able to defeat Scorpion with considerable ease.`,
    info: 'https://mortalkombat.fandom.com/wiki/Moloch'
  },
  {
    id: 51,
    name: 'motaro',
    origin: "outworld",
    species: 'minotaur',
    img: './images/motaro.png',
    desc: `Motaro, along with his entire race, harbors a deep-seated hatred for the Shokan, whom he sees as inferior. The two races constantly struggle against each other in order to prove their value to Shao Kahn and to finally define which one is superior.`,
    info: 'https://mortalkombat.fandom.com/wiki/Motaro'
  },
  {
    id: 52,
    name: 'nightwolf',
    origin: "earthrealm",
    species: 'human',
    img: './images/nightwolf.png',
    desc: `Nightwolf is an archetypal Native American hero, historian, and shaman. He is shown to be a proud and fierce warrior dedicated to the cause of good, and is in contact with Raiden and the Great Spirit through visions. As such, he draws on both internal and external spiritual energy to enhance his power.`,
    info: 'https://mortalkombat.fandom.com/wiki/Nightwolf'
  },
  {
    id: 53,
    name: 'nitara',
    origin: "outworld",
    species: 'vampire',
    img: './images/nitara.png',
    desc: `Nitara is a vampire who, much like Shang Tsung, has to prey on the life of others in order to remain alive, except that she requires blood rather than souls or life energy. Rather than being evil, Nitara is depicted as being rather self-serving and morally neutral. She has long been on a quest to separate her own realm from Outworld.`,
    info: 'https://mortalkombat.fandom.com/wiki/Nitara'
  },
  {
    id: 54,
    name: 'noob saibot',
    origin: "netherrealm",
    species: 'wraith',
    img: './images/noob.png',
    desc: `His name was Bi-Han. After his death and resurrection as Noob Saibot, he has been a recurring antagonist in the franchise, usually siding with other characters on the side of evil in a bid to benefit himself. He also serves as a major antagonist towards his younger brother Sub-Zero and Scorpion in many instances.`,
    info: 'https://mortalkombat.fandom.com/wiki/Bi-Han'
  },
  {
    id: 55,
    name: 'onaga',
    origin: "outworld",
    species: 'dragon',
    img: './images/onaga.png',
    desc: `Under the cryptic name of the "Dragon King", the long-dead ruler of Outworld preceding Shao Kahn. Not much was known about him, except for the fact that his army was deemed undefeatable but, at his untimely death, allowed itself to be mummified and kept in an ancient tomb that remained uncovered until the necromancer Quan Chi stumbled upon it.`,
    info: 'https://mortalkombat.fandom.com/wiki/Onaga'
  },
  {
    id: 56,
    name: 'quan chi',
    origin: "netherrealm",
    species: 'demon',
    img: './images/quan.png',
    desc: `Quan Chi is the most powerful sorcerer and necromancer in the Netherrealm. Quan Chi combines both dark magic and cunning in his never-ending plots to overtake not only Earthrealm, but all of reality. He is notable in particular for his high intelligence and cold, calculating pragmatism, as well as his penchant for manipulating and exploiting vulnerable targets to further his own agenda.`,
    info: 'https://mortalkombat.fandom.com/wiki/Quan_Chi'
  },
  {
    id: 57,
    name: 'raiden',
    origin: "heaven",
    species: 'god',
    img: './images/raiden.png',
    desc: `Raiden is the eternal God of Thunder, protector of Earthrealm. After the second defeat of Shinnok, he ascended to the status of Elder God. He is also more prone to thinking in terms of eternity rather than normal human lifespans, and has a radically different outlook on life.`,
    info: 'https://mortalkombat.fandom.com/wiki/Raiden'
  },
  {
    id: 58,
    name: 'rain',
    origin: "edenia",
    species: 'demi-god',
    img: './images/rain.png',
    desc: `Being the half-god he is, Rain wields immense power. Rain can control two things that involve weather: water and lightning. His powers being related to such, he is able to pressurize jet streams of water to either propel himself or slice his opponents like a blade.`,
    info: 'https://mortalkombat.fandom.com/wiki/Rain'
  },
  {
    id: 59,
    name: 'reiko',
    origin: "outworld",
    species: 'outworlder',
    img: './images/reiko.png',
    desc: `Reiko is a grim and stoic looking man with a penchant for brutality. Reiko also has several similarities to Shao Kahn and has developed a desire to become the ruler of Outworld. Although he lacked the traditional mask and the insignia of The Brotherhood of Shadow was printed on the back.`,
    info: 'https://mortalkombat.fandom.com/wiki/Reiko'
  },
  {
    id: 60,
    name: 'reptile',
    origin: "zaterra",
    species: 'saurian',
    img: './images/reptile.png',
    desc: `Reptile has been a well known servant to the Outworld Empire, faithfully serving the Outworld Emperors Shao Kahn and Kotal Kahn while remaining loyal to his master Shang Tsung. Reptile does not strive for power, he is caught in a delusional state of mind, obsessed with finding the last remaining member of his race, or freeing his homeworld of Zaterra from Outworld's grasp.`,
    info: 'https://mortalkombat.fandom.com/wiki/Reptile'
  },
  {
    id: 61,
    name: 'sareena',
    origin: "outworld",
    species: 'demon',
    img: './images/sareena.png',
    desc: `She is from the Netherrealm and was an assassin for Quan Chi, but turned against him. In the past, she required Quan Chi's magic to sustain her human form, but since recently escaping the Netherrealm, she has managed to find a way to remain beautiful without him. She is now a force of good with an alliance to Sub-Zero.`,
    info: 'https://mortalkombat.fandom.com/wiki/Sareena'
  },
  {
    id: 62,
    name: 'scorpion',
    origin: "netherrealm",
    species: 'spectre',
    img: './images/scorpion.png',
    desc: `He joins the forces of evil only when promised a means of resurrecting his clan on Earth, or the chance to inflict his wrath against those who butchered them. Although he is featured alongside the Forces of Darkness in the opening scene of Mortal Kombat: Armageddon, he remains officially neutral because of his fierce hatred for Quan Chi.`,
    info: 'https://mortalkombat.fandom.com/wiki/Scorpion'
  },
  {
    id: 63,
    name: 'sektor',
    origin: "earthrealm",
    species: 'cyborg',
    img: './images/sektor.png',
    desc: `In stark contrast to his immediate counterpart Cyrax, Sektor never bothered to rediscover his human side, and may be unable to. Even in his human form, Sektor was utterly devoted to the Lin Kuei clan and, unlike Cyrax, Sub-Zero, and Smoke, never questioned or resisted the cyberization process.`,
    info: 'https://mortalkombat.fandom.com/wiki/Sektor'
  },
  {
    id: 64,
    name: 'shang tsung',
    origin: "earthrealm",
    species: 'human',
    img: './images/shang.png',
    desc: `Shang Tsung is a shape-shifter who needs to consume souls in order to sustain his health and life. He is the epitome of cunning and decadence, as symbolized by his preference for lavish parties, grand palaces, and stylish clothing. Unlike the crude Shao Kahn, this bombast is a facade, disguising Shang Tsung's true intellectual and mental sophistication. His arch-nemesis is Liu Kang.`,
    info: 'https://mortalkombat.fandom.com/wiki/Shang_Tsung'
  },
  {
    id: 65,
    name: 'shao kahn',
    origin: "outworld",
    species: 'immortal',
    img: './images/shaokhan.png',
    desc: `Shao Kahn the Konqueror is the emperor of Outworld, and has served as the main antagonist for most of the series. Shao Kahn has often underestimated mankind, and therefore tried to conquer Earthrealm many times, with or without a queen (consort), to no success.`,
    info: 'https://mortalkombat.fandom.com/wiki/Shao_Kahn'
  },
  {
    id: 66,
    name: 'sheeva',
    origin: "outworld",
    species: 'shokan',
    img: './images/sheeva.png',
    desc: `Sheeva served as the personal bodyguard of Queen Sindel during Shao Kahn's failed invasion of Earthrealm, and later became Queen of the Shokan after the death of Goro's father, King Gorbak. Although she has dutifully served Shao Kahn in the past, Sheeva's foremost loyalty is to the Shokan race.`,
    info: 'https://mortalkombat.fandom.com/wiki/Sheeva'
  },
  {
    id: 67,
    name: 'shinnok',
    origin: "heaven",
    species: 'elder-god',
    img: './images/shinnok.png',
    desc: `Shinnok is one of the most evil beings in the entire Mortal Kombat universe. Unlike Shao Kahn, Shinnok relies less on brute strength and fear-mongering, and more on charisma, dark powers, ancient artifacts, and manipulation. He is the ruler of the Netherrealm, possessing millions of years' worth of knowledge and power. He can impersonate any being of his choosing, as well as transform himself into an immense demon.`,
    info: 'https://mortalkombat.fandom.com/wiki/Shinnok'
  },
  {
    id: 68,
    name: 'shujinko',
    origin: "earthrealm",
    species: 'human',
    img: './images/shujinko.png',
    desc: `He is an adventurer who, as a boy, dreamed of fighting Shang Tsung. He has traveled the realms and learned the kombat skills of many warriors. Without knowledge, Shujinko has done many evil deeds such as: offering Lei Chen to Hotaru, acting like a mercenary of some sort, using Bo' Rai Cho's warrior medallion to gain such credibility to join the Lin Kuei, being deceived by Damashi and challenging the Elder Gods for powers.`,
    info: 'https://mortalkombat.fandom.com/wiki/Shujinko'
  },
  {
    id: 69,
    name: 'sindel',
    origin: "edenia",
    species: 'edenian',
    img: './images/sindel.png',
    desc: `Sindel is kind and benevolent in nature, at least in the original timeline. She rules the Realm of Edenia alongside her daughter, Princess Kitana. Sindel's power appears to be of an inner, ethereal nature in more than one way. She is a distinctly older and more mature character, with flowing grey hair and a regal attitude befitting of her role as Queen of Edenia.`,
    info: 'https://mortalkombat.fandom.com/wiki/Sindel'
  },
  {
    id: 70,
    name: 'skarlet',
    origin: "outworld",
    species: 'genetic experiment',
    img: './images/skarlet.png',
    desc: `Created by Shao Kahn himself through magic and the combination of the blood from countless dead warriors.Due to her affiliation with blood, Skarlet is fascinated by the blood of her enemies, revealing to Shao Kahn that Edenian blood is the most unique to her. However, she refrains from the blood of the Kytinn, which has negative effects on her as compared to the blood of humans and Outworlders.`,
    info: 'https://mortalkombat.fandom.com/wiki/Skarlet'
  },
  {
    id: 71,
    name: 'smoke',
    origin: "earthrealm",
    species: 'enenra',
    img: './images/smoke.png',
    desc: `In his first appearance, he would be a tortured human soul trapped in the body of a cyborg. His most defining feature is the fact that he constantly emits smoke. This, combined with his power to teleport and turn invisible, once made him one of the Lin Kuei's top assassins.`,
    info: 'https://mortalkombat.fandom.com/wiki/Smoke'
  },
  {
    id: 72,
    name: 'sonya',
    origin: "earthrealm",
    species: 'human',
    img: './images/sonya.png',
    desc: `General of Earthrealm Special Forces, Sonya Blade is a beautiful, stern, tough-as-nails General. Sonya represents a very emancipated and headstrong woman, but for all her stubbornness and pride, she deeply cares about the lives of her friends and comrades. She has a long-standing enmity with the Black Dragon leader, Kano, who had murdered a former partner of hers.`,
    info: 'https://mortalkombat.fandom.com/wiki/Sonya'
  },
  {
    id: 73,
    name: 'stryker',
    origin: "earthrealm",
    species: 'human',
    img: './images/stryker.png',
    desc: `Originally leader of the Special Riot Control division in the New York City Police Department. Despite being an otherwise ordinary police officer, Stryker is incredibly resilient and adept at hand-to-hand combat, having defeated the likes of Ermac, Reptile, Mileena, and even Kintaro by himself.`,
    info: 'https://mortalkombat.fandom.com/wiki/Stryker'
  },
  {
    id: 74,
    name: 'sub-zero',
    origin: "earthrealm",
    species: 'human',
    img: './images/subzero.png',
    desc: `There are two incarnations of Sub-Zero, both of whom are siblings: older brother Bi-Han, and younger brother Kuai Liang. Both are blue garbed warriors who, at different times, have used the codename "Sub-Zero", and both are members of the Lin Kuei. They are descended from Cryomancers, an exiled Edenian race possessing the ability to generate and control ice.`,
    info: 'https://mortalkombat.fandom.com/wiki/Kuai_Liang'
  },
  {
    id: 75,
    name: 'takeda',
    origin: "earthrealm",
    species: 'human',
    img: './images/takeda.png',
    desc: `Takeda originally had a timid nature and didn't take fighting seriously. However, after the newest iteration of the Shirai Ryu are eradicated, he becomes more serious and continues to help his master, both in missions and preventing him from giving in to his wraith persona. He is son of Kenshi.`,
    info: 'https://mortalkombat.fandom.com/wiki/Takeda_Takahashi'
  },
  {
    id: 76,
    name: 'tanya',
    origin: "edenia",
    species: 'edenian',
    img: './images/tanya.png',
    desc: `Originally introduced as an ostensible innocent, she was quickly revealed to be corrupted by evil, a worshiper of Shinnok and an ally to the Brotherhood of Shadow. After Shinnok's defeat, she later served Shao Kahn, the Deadly Alliance, and Onaga. Tanya seems to view herself as a survivor more than anything else, justifying her choices as being the "right decisions".`,
    info: 'https://mortalkombat.fandom.com/wiki/Tanya'
  },
  {
    id: 77,
    name: 'taven',
    origin: "edenia",
    species: 'demi-god',
    img: './images/taven.png',
    desc: `He is a half-god and son of the Protector of Edenia, Argus, and of a powerful sorceress who has the ability to see into the future, Delia. Like his brother Daegon, Taven has the ability to control fire. During his early character development.`,
    info: 'https://mortalkombat.fandom.com/wiki/Taven'
  },
  {
    id: 78,
    name: 'tremor',
    origin: "earthrealm",
    species: 'human',
    img: './images/tremor.png',
    desc: `A brown palette-swapped ninja who is one of Kano's Black Dragon cohorts and possesses the ability of geokinesis, he escaped from Special Forces custody during a prison break orchestrated by Kano, to whom he was blindly loyal. Kano assigned him as his lookout and guardian of a portal leading to Outworld, but Tremor was eventually defeated by Jax.`,
    info: 'https://mortalkombat.fandom.com/wiki/Tremor'
  },
  {
    id: 79,
    name: 'triborg',
    origin: "earthrealm",
    species: 'cyborg',
    img: './images/triborg.png',
    desc: `After Sub-Zero had killed Sektor and single-handedly defeated the Lin Kuei, the Special Forces located the secret data storage and attempted to process it into a test body at an SF lab. During this process, the consciousnesses of Sektor, Cyrax, Smoke and even Cyber Sub-Zero merged together. This consciousness, giving itself the title of Triborg, killed every Special Forces member at the lab and escaped.`,
    info: 'https://mortalkombat.fandom.com/wiki/Triborg'
  },
];

export default fighters;