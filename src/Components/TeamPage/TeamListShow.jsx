//import react bootstrap icons
import { PersonCircle } from "react-bootstrap-icons"

function TeamListShow({posts}) {
    return (
        <tbody>
            {posts.map((post, index) => (
                <tr key={post[0][0]} id={post[0][0]}>
                    <td>{post[0][0]}</td>
                    <td>{post[0][1]}</td>
                    <td>
                        {post[1].map((member) => (
                            <PersonCircle key={member[0]} title={member[0]}></PersonCircle>
                        ))}
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default TeamListShow;