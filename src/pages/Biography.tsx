const Biography = () => (
  <div style={{ 
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '2rem',
    lineHeight: '1.6'
  }}>
    <h2 style={{ 
      textAlign: 'center', 
      marginBottom: '3rem',
      fontSize: '2.5rem',
      color: '#ffffff',

    }}>
      About Me
    </h2>
    
    {/* Personal Info Card */}
    <div style={{ 
      background: 'rgba(255, 255, 255, 0.05)', 
      padding: '2rem', 
      borderRadius: '15px',
      marginBottom: '2rem',
      border: '1px solid rgba(255, 153, 0, 0.3)'
    }}>
      <h3 style={{ 
        fontSize: '2rem', 
        marginBottom: '1.5rem',
        color: '#ff9900',
        textAlign: 'center'
      }}>
        👨‍💻 Denys
      </h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        textAlign: 'center'
      }}>
        <div>
          <p><strong>🎂 Age:</strong> 18 years old</p>
        </div>
        <div>
          <p><strong>📅 Born:</strong> April 3, 2007</p>
        </div>
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p><strong>🎓 Education:</strong> Aspiring Cybersecurity Specialist</p>
        <p>studying at <em>Khmelnytskyi National University</em></p>
      </div>
    </div>

    {/* Skills Section */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(2, 1fr)', 
      gap: '2rem',
      marginBottom: '2rem'
    }}>
      
      {/* Technical Skills */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        padding: '2rem', 
        borderRadius: '15px',
        border: '1px solid rgba(255, 153, 0, 0.3)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem',
          color: '#ff9900',
          textAlign: 'center'
        }}>
          💻 Technical Skills
        </h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: '0',
          margin: '0'
        }}>
          <li style={{ 
            padding: '0.5rem 0', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            🔤 Programming Languages: <strong>C, C++, Java</strong>
          </li>
          <li style={{ 
            padding: '0.5rem 0', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            🤖 AI Implementation and Integration
          </li>
          <li style={{ 
            padding: '0.5rem 0', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            🧩 Problem-Solving and Analysis
          </li>
          <li style={{ padding: '0.5rem 0' }}>
            🛡️ Cybersecurity Fundamentals
          </li>
        </ul>
      </div>

      {/* Key Strengths */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        padding: '2rem', 
        borderRadius: '15px',
        border: '1px solid rgba(255, 153, 0, 0.3)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem',
          color: '#ff9900',
          textAlign: 'center'
        }}>
          ⭐ Key Strengths
        </h3>
        <ul style={{ 
          listStyle: 'none', 
          padding: '0',
          margin: '0'
        }}>
          <li style={{ 
            padding: '0.5rem 0', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            💪 High Stress Resistance
          </li>
          <li style={{ 
            padding: '0.5rem 0', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            ⚡ Quick Learning Ability
          </li>
          <li style={{ 
            padding: '0.5rem 0', 
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            🔄 Adaptability to New Environments
          </li>
          <li style={{ padding: '0.5rem 0' }}>
            🎯 Goal-Oriented Mindset
          </li>
        </ul>
      </div>
    </div>

    {/* Summary Section */}
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(255, 153, 0, 0.1), rgba(255, 153, 0, 0.05))', 
      padding: '2rem', 
      borderRadius: '15px',
      border: '1px solid rgba(255, 153, 0, 0.3)',
      textAlign: 'center'
    }}>
      <h3 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '1.5rem',
        color: '#ff9900'
      }}>
        🚀 Professional Summary
      </h3>
      <p style={{ 
        fontSize: '1.1rem',
        fontStyle: 'italic',
        margin: '0',
        maxWidth: '600px',
      }}>
        As a young and ambitious cybersecurity student, I combine my technical knowledge with a natural ability to adapt and learn. 
        My expertise in programming and AI, coupled with strong problem-solving skills, makes me well-equipped to tackle complex 
        challenges in the ever-evolving field of cybersecurity.
      </p>
    </div>
  </div>
);

export default Biography;
