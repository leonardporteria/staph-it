import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const versionArchiveData = [
  {
    title: 'v1.01',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.01 - “Tap Damage”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>
            Release Date: April 3, 2025
          </p>
          <p className='text-sm md:text-base mb-4'>Size: 65.14 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>
              Introduced core clicker system: Tap anywhere to deal damage.
            </li>
            <li>
              Basic enemy logic: Enemies have HP, die when depleted, and respawn
              after a short delay.
            </li>
            <li>
              Added essential UI elements:
              <ul className='list-disc list-inside ml-4'>
                <li>Enemy HP bar</li>
                <li>Gold counter that updates on enemy defeat</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/pawabeeuw6ey5fw0hctd0/SANDATAPv1.01.apk?rlkey=6ftevgsfant4qmetq7o68osaw&st=tfxr6r3v&dl=1'>
              Get v1.01
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (1).png'
            alt='v1.01 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'v1.02',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.02 - “Idle Heroes & Coin Burst”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>
            Release Date: April 10, 2025
          </p>
          <p className='text-sm md:text-base mb-4'>Size: 42.49 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>Added Idle Heroes that automatically deal passive DPS.</li>
            <li>Tap damage upgrade system with shop UI.</li>
            <li>Coin Burst effect on enemy defeat.</li>
            <li>
              Early version of Journal system for side character tracking.
            </li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/ugv2jh81hbs3n9vss1rar/SANDATAPv1.02.apk?rlkey=gky8ix793getpdryysq87lae9&st=jdks9yd4&dl=1'>
              Get v1.02
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (2).png'
            alt='v1.02 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'v1.03',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.03 - “Main Character Animation”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>
            Release Date: April 22, 2025
          </p>
          <p className='text-sm md:text-base mb-4'>Size: 65.29 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>Animated main character.</li>
            <li>Smoother attack transitions and death animations.</li>
            <li>Stronger enemies and scaling rewards.</li>
            <li>Auto-progress system after enemy defeat.</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/ufxjqtcim82aebpnddarx/SANDATAPv1.03.apk?rlkey=6dana38gb1tjfnzt1auoqppim&st=hc84y6ti&dl=1'>
              Get v1.03
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (3).png'
            alt='v1.03 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'v1.04',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.04 - “Loading Scene & Animations”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>
            Release Date: April 28, 2025
          </p>
          <p className='text-sm md:text-base mb-4'>Size: 72.15 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>Polished loading screen with animations.</li>
            <li>Boss battles every 10th level with timers and penalties.</li>
            <li>Enhanced particles, sound, and floating text.</li>
            <li>Basic save system using PlayerPrefs.</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/emrf2qfxunyfny67683e3/SANDATAPv1.04.apk?rlkey=onp01wxhny7cf3xf4sntxq10w&st=63oxn3b3&dl=1'>
              Get v1.04
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (4).png'
            alt='v1.04 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'v1.05',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.05 - “Scriptable Save Overhaul”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>
            Release Date: April 30, 2025
          </p>
          <p className='text-sm md:text-base mb-4'>Size: 72.8 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>Save system reworked to use ScriptableObject database.</li>
            <li>
              Better support for hero data, upgrades, and progress saving.
            </li>
            <li>Prepares for future cloud save support.</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/4gb1djmxfvo9tm0nkqvsz/SANDATAPv1.05.apk?rlkey=yq7pvbmx3zx8z9l7l2idqidyi&st=3zcvrcgc&dl=1'>
              Get v1.05
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (5).png'
            alt='v1.05 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'v1.06',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.06 - “Dynamic UI & Hero Overhaul”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>Release Date: May 2, 2025</p>
          <p className='text-sm md:text-base mb-4'>Size: 72.9 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>Dynamic UI changes based on player progress.</li>
            <li>New Idle Hero Frame with stat displays.</li>
            <li>Visual updates to hero icons, backgrounds, and UI polish.</li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/tr2p8ipzhvfkbycp9mqqs/SANDATAPv1.06.apk?rlkey=92cl347y4mugsgqayx7o78c5b&st=ghju8r5w&dl=1'>
              Get v1.06
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (6).png'
            alt='v1.06 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'v1.07',
    content: (
      <div className='space-y-6'>
        <p className='text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold'>
          📦 Version 1.07 - “Gear Up & Game Polish Update”
        </p>
        <div>
          <p className='text-sm md:text-base mb-2'>
            Release Date: June 6, 2025
          </p>
          <p className='text-sm md:text-base mb-4'>Size: 87.7 MB</p>
          <p className='mb-2'>What&apos;s New:</p>
          <ul className='list-disc list-inside text-sm md:text-base space-y-1'>
            <li>
              Game Config Tuning System: balanced enemy/player stats and
              scaling.
            </li>
            <li>
              UI Overhaul: redesigned shop, inventory, and battle interfaces.
            </li>
            <li>
              Weapon Shop: buy, view, and equip weapons that update character
              visuals.
            </li>
            <li>
              New Artifact System: unlock/upgrade powerful artifacts with Diwa
              currency.
            </li>
          </ul>
        </div>
        <div className='space-y-2'>
          <Button className='font-bold'>
            <a href='https://dl.dropboxusercontent.com/scl/fi/a1e2nomlk5md75ob8p6qv/StaPH-it-v1.06.apk?rlkey=rodnrmo9s7zowt5i3fhesvnmf&st=kfg2yddb&dl=1'>
              Get v1.07
            </a>
          </Button>
          <Image
            src='/images/mockups/mockup (7).png'
            alt='v1.07 screenshot'
            width={500}
            height={500}
          />
        </div>
      </div>
    ),
  },
];
