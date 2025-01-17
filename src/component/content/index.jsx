import React from 'react'
import "./index.css"

import imgBg from "../../assets/image/imgBG1.png"
import iconBell from "../../assets/image/iconBell.png"

export function Content() {
    return (
        <div>
            <div className="m-5" style={{ marginTop: '200px' }}>
                <div className="div-content-earn">
                    <h1 className='content-h1 mb-4' id='earntokens'>Earn Tokens Through Mining</h1>
                    <div className="overflow-hidden">
                        <img className='w-100 h-100 objectfit-cover' src={imgBg} alt="" />
                    </div>
                    <div className="mt-5">
                    </div>
                    <span className='content-span-all'>Simply click on <span className='content-span-bold'>'Start Mining'</span> and wait for your tokens to accumulate. If you're new, we suggest exploring and reading the technical documentation below for better understanding.</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='task'>Your Task is Simple</h1>
                    <span className='content-span-all'>Your goal is to find a valid hash for the current block and claim a reward. Miners who discover the correct hash will <span className='content-span-bold'>receive 30%</span> of the block reward, while the <span className='content-span-bold'>remaining 70%</span> is shared among other participants.</span>
                    <div className="mt-5 d-flex div-content-note">

                        <div className="line-left-note"></div>

                        <div className="p-3 div-content-note-right">
                            <div className="d-flex gap-3">
                                <div className="">
                                    <img src={iconBell} alt="" />
                                </div>
                                <div className="">Note</div>
                            </div>
                            <li className='py-3'>
                                The reward for discovering the correct hash will decrease by 1% every 100,000 blocks until it reaches 10%.
                            </li>
                        </div>
                    </div>

                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='mining'>Mining Principles Similar to Bitcoin</h1>
                    <span className='content-span-all'>The mining process works <span className='content-span-bold'>similarly to Bitcoin</span>, utilizing the same algorithm.</span><br />
                    <span className='content-span-all'>The difficulty adjusts based on the number of participants</span>

                    <div className="my-5 d-flex div-content-note">
                        <div className="line-left-info"></div>
                        <div className="p-3 div-content-info">
                            <ul className=''>
                                <li>As more miners join, earning tokens becomes harder.</li>
                                <li>Conversely, as fewer miners participate, earning tokens becomes easier.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <span className='content-span-all'>👉  Be an early adopter to maximize your rewards.</span>
                    </div>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='supply'>Limited Token Supply</h1>
                    <span className='content-span-all'>Once all tokens are mined, they will be distributed on-chain to miners. The mining process is expected to take about <span className='content-span-bold'>100</span> to <span className='content-span-bold'>120 days</span>.</span>
                </div>
                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='community'>Community-Focused</h1>
                    <span className='content-span-all'>Any additional in-app purchases made with Stars (★)</span>
                    <span className='content-span-all'>will be allocated to cover internal expenses such as:</span>

                    <div className="my-5 d-flex div-content-note">
                        <div className="line-left-info"></div>
                        <div className="p-3 div-content-info">
                            <ul className=''>
                                <li>Engineering</li>
                                <li>Support</li>
                                <li>Marketing</li>
                                <li>And Further Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='performance'>Device Performance Considerations</h1>
                    <span className='content-span-all'>
                        Since your device performs calculations, it may heat up, especially in high-performance modes like <span className='content-span-bold'>Rocket, Blazing, or God.</span> ⚡
                    </span>
                    <br />
                    <span className='content-span-all'>
                        This may not be comfortable for everyone, but it also <span className='content-span-bold'>increases the value of the tokens</span> you're mining since, much like Bitcoin miners, you’re using ⚡ <span className='content-span-bold'>electricity</span> to earn them.
                    </span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='limitations'>Limitations</h1>
                    <div className="mt-5 d-flex div-content-note">

                        <div className="line-left-note"></div>

                        <div className="p-3 div-content-note-right">
                            <div className="d-flex gap-3">
                                <div className="">🛑</div>
                                <div className="">Note</div>
                            </div>
                            <li className='py-3'>
                                Tokens gained through farming bots will be confiscated to support the development team and future improvements.
                            </li>
                        </div>
                    </div>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='purchase'>How can I purchase Stars (★)?</h1>
                    <span className='content-span-all'>You can securely purchase Stars in three ways:</span>

                    <div className="my-5 d-flex div-content-note">
                        <div className="line-left-info"></div>
                        <div className="p-3 div-content-info">
                            <div className="d-flex gap-3">
                                <div className="">🔹</div>
                                <div className="">Directly within the <span className='content-span-bold-2'>Telegram app</span></div>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="">🔸</div>
                                <div className="">Through the <span className='content-span-bold-2'>Fragment service</span></div>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="">⚙️</div>
                                <div className="">Via <span className='content-span-bold-2'>Telegram's official bots</span>: @PremiumBot and @send</div>
                            </div>
                        </div>
                    </div>
                    <span className='content-span-all'>All of these methods are safe and reliable. ⚠️</span> <br />
                    <span className='content-span-all'>Be cautious of using unofficial third-party services or bots, as they may lead to scams.</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='upgrade'>How does the maximum power upgrade system work ?</h1>
                    <span className='content-span-all'><span className='content-span-bold'>For every 200 Stars</span>, your maximum mana level increases by <span className='content-span-bold'>+2,000</span>.</span><br />
                    <span className='content-span-all'>Each subsequent upgrade costs double the previous price, but the benefits are greater.</span>
                    <div className="mt-4">
                        <span className='content-span-all'><span className='content-span-bold'>For instance</span>, after adding <span className='content-span-bold'>2,000</span> to your <span className='content-span-bold'>200✶</span>, the next upgrade will cost <span className='content-span-bold'>400 Stars</span> and provide <span className='content-span-bold'>+4,000</span>.</span><br />
                    </div>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='hashes'>What are hashes ?</h1>
                    <span className='content-span-all'><span className='content-span-bold'>Hashes</span> are the results of multiple calculations performed by your device in an attempt to find the correct "code" (hash) that unlocks a block.</span><br />
                    <span className='content-span-all'>It’s like trying countless combinations on a lock—each guess is a <span className='content-span-bold'>hash</span>. 🔐</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='shares'>What are shares ?</h1>
                    <div className="mt-5 d-flex div-content-note">
                        <div className="line-left-note"></div>
                        <div className="p-3 div-content-note-right">
                            <div className="d-flex gap-3">
                                <div className="">🔸</div>
                                <div className=""> <span className='content-span-bold-2'>Shares</span> are hashes that don't meet the global difficulty required to find a block but meet the lower difficulty level set by the mining pool.</div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5 d-flex div-content-note">
                        <div className="line-left-info"></div>
                        <div className="p-3 div-content-info">
                            <div className="d-flex gap-3">
                                <div className="">🔹</div>
                                <div className="">Shares are <span className='content-span-bold-2'>intermediate successful attempts</span> that prove you're actively mining.Telegram app</div>
                            </div>
                        </div>
                    </div>
                    <span className='content-span-all'>If one of your hashes meets the necessary difficulty for the block, you get the <span className='content-span-bold'>main block reward</span>.</span><br />
                    <span className='content-span-all'>Otherwise, you still earn rewards based on the <span className='content-span-bold'>shares</span> you’ve contributed.</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='block-reward'>Why don't I always receive a block reward?</h1>
                    <span className='content-span-all'>Numerous miners are working at the same time, and those closest to the solution (shares) get a portion of the block's reward.</span><br />
                    <span className='content-span-all'>The more hashes your device tries, the more shares you will find, and the higher the chance of earning a larger share of the reward.</span>

                    <div className="my-5 d-flex div-content-note">
                        <div className="line-left-warning"></div>
                        <div className="p-3 div-content-warning ps-4">
                            <div className="d-flex gap-3 pb-3">
                                <div className="">⚠️</div>
                                <div className="">However, if your device didn’t find the correct hash or contribute any qualifying shares, you won’t get a reward.</div>
                            </div>
                            <div className="ps-4 div-content-warning">
                                The frequency of your rewards depends on:
                                <ul>
                                    <li>Your device’s performance</li>
                                    <li>Block difficulty</li>
                                    <li>Competition from other miners</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='total-mined'>Why doesn't the Total Mined % match the number of blocks in Stats ?</h1>
                    <span className='content-span-all'>The mining progress percentage reflects the number of tokens distributed as rewards, not the block count. These are different metrics, so the progress percentage will not align with the number of blocks. As blocks become harder over time and rewards increase, the progress indicator will fill more slowly.</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='devices'>How many accounts, devices, and IP addresses can I use ?</h1>
                    <span className='content-span-all'>We don’t limit the number of devices or track changes to your IP address. However, only one instance of the Elonhash app can be active at any time. We recommend avoiding multiple accounts to ensure a fair experience, as we try to keep users to a maximum of three active accounts.</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='rent'>Can I rent a server for mining?</h1>
                    <span className='content-span-all'>Yes, you can <span className='content-span-bold'>rent a server</span> for mining, but this may require technical knowledge and won’t necessarily provide significant advantages. Renting a server involves additional costs and risks. We recommend mining with your personal devices, as it's simpler, safer, and more convenient.</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='ban'>For what reasons could I be banned ?</h1>
                    <div className="my-5 d-flex div-content-note">
                        <div className="line-left-warning"></div>
                        <div className="p-3 div-content-warning ps-4">
                            <div className="d-flex gap-3 pb-3">
                                <div className="">⚠️</div>
                                <div className=""> We rarely ban users, except for those attempting to:</div>
                            </div>
                            <div className="ps-4 div-content-warning">
                                <ul>
                                    <li>Tamper with the code</li>
                                    <li>Use scripts</li>
                                    <li>Reverse-engineer the app to interact with Elonhash servers in unauthorized ways</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span className='content-span-all'>Regular users who simply use the app are safe. 😊</span>

                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='energy'>Why can my energy sometimes exceed the maximum ?</h1>
                    <span className='content-span-all'>Your <span className='content-span-bold'>maximum energy level</span> is the threshold where energy automatically replenishes.</span>
                    <span className='content-span-all'>However, <span className='content-span-bold'>energy</span> can also be earned as a reward for completing certain tasks, which may temporarily push your energy level <span className='content-span-bold'>above the usual maximum</span>. ⚡</span>
                </div>

                <div className="div-content-1">
                    <h1 className='content-h1 mb-4' id='question'>I have another question.</h1>
                    <span className='content-span-all'>If you have more questions or encounter any issues, <span className='content-span-bold'>Elonhash support</span> is available to assist you. Reach out to us at <span className='content-span-bold'>@ElonhashSup on Telegram</span>.</span>
                </div>
            </div>
        </div>
    )
}
